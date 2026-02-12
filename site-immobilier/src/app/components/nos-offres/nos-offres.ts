import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { OffreModel } from '../../models/offre-model';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-nos-offres',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './nos-offres.html',
  styleUrl: './nos-offres.scss',
})
export class NosOffres implements OnInit {

  breakpoints = {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  };
  @ViewChild('swiperEl') swiperRef!: ElementRef;
  mesOffres = signal<OffreModel[]>([]);

  constructor(private monApiService: ApiService) {}

  ngOnInit(): void {
    this.monApiService.getOffres().subscribe({
      next: (response) => {
        this.mesOffres.set(JSON.parse(response));
      }
    });
  }

  slideNext() {
    this.swiperRef.nativeElement.swiper.slideNext();
  }

  slidePrev() {
    this.swiperRef.nativeElement.swiper.slidePrev();
  }

}
