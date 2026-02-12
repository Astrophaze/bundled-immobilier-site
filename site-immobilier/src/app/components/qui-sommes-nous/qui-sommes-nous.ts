import { Component, OnInit, signal } from '@angular/core';
import { ArticleModel } from '../../models/article-model';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-qui-sommes-nous',
  imports: [],
  templateUrl: './qui-sommes-nous.html',
  styleUrl: './qui-sommes-nous.scss',
})
export class QuiSommesNous implements OnInit {

  monArticle = signal<ArticleModel | null>(null);

  constructor(private monApiService: ApiService) {}

  ngOnInit(): void {
    this.monApiService.getArticle(1).subscribe({
      next: (response) => {
        this.monArticle.set(JSON.parse(response)[0]);
      }
    });
  }

}
