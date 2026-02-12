import { Component, OnInit, signal } from '@angular/core';
import { AuthService } from './services/auth-service';
import { ApiService } from './services/api-service';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('site-immobilier');

  constructor(private monAuthService: AuthService, private monApiService: ApiService){}

  ngOnInit(): void {
    this.monAuthService.fetchJwtToken().subscribe({
      next: () => {},
      error: (err) => {
        console.error('Impossible de récupérer le JWT');
        console.log(err);
      }
    });
  }

}
