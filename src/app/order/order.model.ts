class Order {
    constructor(
        public adress:string,
        public  number:number,
        public optionalAddress:string,
        public paymentOption: string,
        public orderItems: OrderItem[]) {
            
         }

}
class OrderItem {
    constructor(quantity: number, menuId: string ) { }
}
export{Order,OrderItem}