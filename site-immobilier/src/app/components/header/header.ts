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

  constructor(private monApiService: ApiService, private router: Router, private fb: FormBuilder) {

    this.formulaire = this.fb.group({
      type: [''],
      ville: [''],
      budget: ['']
    });
  }

  ngOnInit(): void {

    // Récupération des types de biens
    this.monApiService.getTypes().subscribe({
      next: (response) => {
        this.mesTypes.set(JSON.parse(response));
      }
    });

    // Récupération des villes
    this.monApiService.getVilles().subscribe({
      next: (response) => {
        this.mesVilles.set(JSON.parse(response));
      }
    });

  }


  submitRecherche(type: string) {
    type = this.formulaire.get('type')?.value();
    this.router.navigate(['recherche'], {queryParams: {}});
  }

}
