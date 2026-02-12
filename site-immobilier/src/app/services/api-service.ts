import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  private baseUrl: string = "http://localhost:8080/";

  constructor(private monHttpClient: HttpClient) {}

  getTypes () {
    return this.monHttpClient.get(`${this.baseUrl}types.php`, {
      responseType: 'text'
    })
  }

  getVilles () {
    return this.monHttpClient.get(`${this.baseUrl}villes.php`, {
      responseType: 'text'
    });
  }

  getArticle(id_article: number) {
    return this.monHttpClient.get(`${this.baseUrl}article.php?id=${id_article}`, {
      responseType: 'text'
    });
  }

  getOffres () {
    return this.monHttpClient.get(`${this.baseUrl}offres.php`, {
      responseType: 'text'
    });
  }

  postFormContact(formData: FormData) {
    return this.monHttpClient.post(`${this.baseUrl}contact.php`, formData, {
      responseType: 'text'
    });
  }


  getOffresRecherche(type: string) {
    return this.monHttpClient.get(`${this.baseUrl}offres.php?type=` + type);
  }

}
