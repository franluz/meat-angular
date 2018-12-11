import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurante-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

   delivery:number=8

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartao de Debito', value: 'DEB' },
    { label: 'Cartao Refeiçao', value: 'REF' }
  ]
  constructor(private orderService: OrderService) { }
  
  ngOnInit() {
  }
  cartItems(): CartItem[]{
    return this.orderService.cartItems()
  }
  
  increaseQty(item:CartItem){
    this.orderService.increasyQty(item)
  }
  decreaseQty(item:CartItem){
    this.orderService.decreasyQty(item)
  }
  removeItem(item:CartItem){
    this.orderService.removeItem(item)
  }
  itemsValue(): number {
    return this.orderService.itemsValue() 
  }
}
