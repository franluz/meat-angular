import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestauranteService } from 'app/restaurante/restaurante.service';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../menu-item/menu-items.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu:Observable<MenuItem[]>
  constructor(private restaurantService: RestauranteService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu=this.restaurantService
    .menuOfRestaurant(this.route.parent.snapshot.params['id'])
  }
  addMenuItem(item:MenuItem){
    console.log(item)
  }
}
