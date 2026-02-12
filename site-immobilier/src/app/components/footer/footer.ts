import { Component, OnInit, signal } from '@angular/core';
import { ArticleModel } from '../../models/article-model';
import { ApiService } from '../../services/api-service';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [ReactiveFormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer implements OnInit {

  formSent = signal<boolean>(false);
  articleContact = signal<ArticleModel | null>(null);
  monFormulaire: FormGroup = new FormGroup({});

  constructor(private monApiService: ApiService, private fb: FormBuilder) {
    this.monFormulaire = this.fb.group({
      prenom: ['', [Validators.required, Validators.minLength(3)]],
      nom: ['', [Validators.required, Validators.minLength(3)]],
      telephone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    this.monApiService.getArticle(2).subscribe({
      next: (response) => {
        this.articleContact.set(JSON.parse(response)[0]);
      }
    });
  }

  envoyerFormulaireContact() {
    if(this.monFormulaire.valid) {
      const formValues = new FormData();
      for(let key in this.monFormulaire.value) {
        formValues.append(key, this.monFormulaire.value[key]);
      }

      this.monApiService.postFormContact(formValues).subscribe({
        next: (response) => {
          const data = JSON.parse(response);
          if(!data.error) {
            this.formSent.set(true);
          } else {
            console.log(data.message);
          }
        }, 
        error: (err) => {
          switch(err.status) {
            case 401: 
              console.log('Unauthorized');
              break;
            case 403: 
              console.log('Forbidden');
              break;
          }
        }
      });

    }
  }

}
