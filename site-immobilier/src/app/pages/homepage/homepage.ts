import { Component } from '@angular/core';
import { QuiSommesNous } from "../../components/qui-sommes-nous/qui-sommes-nous";
import { NosOffres } from "../../components/nos-offres/nos-offres";

@Component({
  selector: 'app-homepage',
  imports: [QuiSommesNous, NosOffres],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {

  
}
