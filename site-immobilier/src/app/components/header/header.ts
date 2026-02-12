import { Component, OnInit, signal } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { TypeModel } from '../../models/type-model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [ReactiveFormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  mesTypes = signal<TypeModel[]>([]);
  mesVilles = signal<any[]>([]);
  formulaire: FormGroup;

  constructor(
    private monApiService: ApiService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.formulaire = this.fb.group({
      type: [''],
      ville: [''],
      budget: [null],
      vente: [false],
      location: [false],
    });
  }

  ngOnInit(): void {
    this.monApiService.getTypes().subscribe({
      next: (response) => {
        this.mesTypes.set(JSON.parse(response));
      },
    });

    this.monApiService.getVilles().subscribe({
      next: (response) => {
        this.mesVilles.set(JSON.parse(response));
      },
    });
  }

  setTransaction(type: 'vente' | 'location') {
    const currentVal = this.formulaire.get(type)?.value;
    this.formulaire.get(type)?.setValue(!currentVal);
  }

  submitRecherche() {
    const rawValues = this.formulaire.value;
    const filtres: any = {};

    Object.keys(rawValues).forEach((key) => {
      const value = rawValues[key];

      if (value !== '' && value !== null && value !== undefined && value !== false) {
        filtres[key] = value;
      }
    });

    this.router.navigate(['recherche'], { queryParams: filtres });
  }
}
