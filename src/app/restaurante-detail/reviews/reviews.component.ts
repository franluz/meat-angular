import { Component, OnInit } from '@angular/core';
import { RestauranteService } from 'app/restaurante/restaurante.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>
  constructor(private restaurantService: RestauranteService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews =
      this.restaurantService.reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
