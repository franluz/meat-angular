import { Component, OnInit } from '@angular/core';
import {RestauranteService} from '../restaurante/restaurante.service'
import { Restaurant } from 'app/restaurante/restaurant/restaurant.model';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'mt-restaurante-detail',
  templateUrl: './restaurante-detail.component.html'
})
export class RestauranteDetailComponent implements OnInit {

  restaurant: Restaurant

  constructor(private restasurantsService: RestauranteService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.restasurantsService.restaurantById(this.route.snapshot.params['id'])
    .subscribe(restaurant => this.restaurant = restaurant)
  }

}
