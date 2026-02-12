import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string = 'http://localhost:8080/';

  constructor(private monHttpClient: HttpClient) {}

  getTypes() {
    return this.monHttpClient.get(`${this.baseUrl}types.php`, {
      responseType: 'text',
    });
  }

  getVilles() {
    return this.monHttpClient.get(`${this.baseUrl}villes.php`, {
      responseType: 'text',
    });
  }

  getArticle(id_article: number) {
    return this.monHttpClient.get(`${this.baseUrl}article.php?id=${id_article}`, {
      responseType: 'text',
    });
  }

  getOffres() {
    return this.monHttpClient.get(`${this.baseUrl}offres.php`, {
      responseType: 'text',
    });
  }

  postFormContact(formData: FormData) {
    return this.monHttpClient.post(`${this.baseUrl}contact.php`, formData, {
      responseType: 'text',
    });
  }

  getOffresRecherche(params: any) {
    const morceauxLien: string[] = [];

    Object.keys(params).forEach((nomChamp) => {
      let value = params[nomChamp];
      if (value === 'true' || value === true) {
        value = 1;
      }
      if (value === 'false' || value === false) {
        value = 0;
      }
      let nomParam;
      if (nomChamp === 'ville') {
        nomParam = 'localisation';
      } else {
        nomParam = nomChamp;
      }
      morceauxLien.push(`${nomParam}=${encodeURIComponent(value)}`);
    });
    const chaineParams = morceauxLien.join('&');
    let url;
    if (chaineParams) {
      url = `${this.baseUrl}offres.php?${chaineParams}`;
    } else {
      url = `${this.baseUrl}offres.php`;
    }
    return this.monHttpClient.get(url, {
      responseType: 'text',
    });
  }
}
