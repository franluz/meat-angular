import { Component, OnInit, EventEmitter,Output, Input } from '@angular/core';
import {MenuItem} from './menu-items.model'
import { ActivatedRoute } from '@angular/router';
import { RestauranteService } from 'app/restaurante/restaurante.service';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem
  @Output() add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  emitAddEvent(){
    this.add.emit(this.menuItem)
  }

}
