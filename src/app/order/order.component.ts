import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurante-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup
  delivery: number = 8

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartao de Debito', value: 'DEB' },
    { label: 'Cartao Refeiçao', value: 'REF' }
  ]
  constructor(private orderService: OrderService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      emailConfirmation: this.formBuilder.control(''),
      address: this.formBuilder.control(''),
      number: this.formBuilder.control(''),
      optionAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('')
    })
  }
  cartItems(): CartItem[] {
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem) {
    this.orderService.increasyQty(item)
  }
  decreaseQty(item: CartItem) {
    this.orderService.decreasyQty(item)
  }
  removeItem(item: CartItem) {
    this.orderService.removeItem(item)
  }
  itemsValue(): number {
    return this.orderService.itemsValue()
  }
  checkOrder(order: Order) {
    order.orderItems = this.cartItems()
    .map((item:CartItem)=>new OrderItem(item.quantity, item.menuItem.id))
    this.orderService.checkOrder(order).subscribe((orderId: string) =>{
      this.router.navigate(['/order-summary'])
    })
      this.orderService.clear()
  }
}
