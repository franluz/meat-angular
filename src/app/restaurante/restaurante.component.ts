import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestauranteService } from './restaurante.service';

@Component({
  selector: 'mt-restaurante',
  templateUrl: './restaurante.component.html'
})
export class RestauranteComponent implements OnInit {
  restaurants:Restaurant[]

  constructor(private restauranteService: RestauranteService) { }

  ngOnInit() {
    this.restauranteService.restaurantes()
    .subscribe(restaurants => this.restaurants = restaurants)
  }

}
