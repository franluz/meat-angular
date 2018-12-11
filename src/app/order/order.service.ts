import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurante-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurante-detail/shopping-cart/cart-item.model";

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService) { }
    cartItems(): CartItem[] {
        return this.cartService.items;
    }
    increasyQty(item: CartItem) {
        this.cartService.increasyQty(item);
    }
    decreasyQty(item: CartItem) {
        this.cartService.decreasyQty(item);
    }
    removeItem(item: CartItem) {
        this.cartService.removeItem(item)
    }
    itemsValue():number{
        return this.cartService.total()
    }

}