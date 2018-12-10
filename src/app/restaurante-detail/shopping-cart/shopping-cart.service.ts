import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-items.model";

export class ShoppingCartService {
    items: CartItem[]=[]
    clear() {
        this.items = []
    }
    total(): number {
        return this.items.map(item => item.value()).reduce((prev, value) => prev + value,0)
    }
    addItem(item: MenuItem) {
        let foudItem = this.items.find((mItem) => mItem.menuItem.id == item.id)
        if (foudItem) {
            foudItem.quantity = foudItem.quantity + 1
        } else {
            this.items.push(new CartItem(item))
        }
    }
    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
    }

}