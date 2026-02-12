import { Component, OnInit, signal } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { ActivatedRoute } from '@angular/router';
import { OffreModel } from '../../models/offre-model';

@Component({
  selector: 'app-recherche-component',
  imports: [],
  templateUrl: './recherche-component.html',
  styleUrl: './recherche-component.scss',
})
export class RechercheComponent implements OnInit {
  listeOffres = signal<OffreModel[]>([]);

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const filtres: any = {};
      params.keys.forEach((key) => {
        filtres[key] = params.get(key);
      });

      this.sendRecherche(filtres);
    });
  }

  sendRecherche(filtres: any) {
    this.apiService.getOffresRecherche(filtres).subscribe({
      next: (response) => {
        this.listeOffres.set(JSON.parse(response));
      },
    });
  }
}
