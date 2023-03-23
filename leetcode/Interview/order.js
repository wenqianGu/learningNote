
import Item from './item'

class Order {
    constructor(Item){
        Item = this.Item;
    }

    calculatePrice(Item) {
        const totalPrice = 0;
        for(let i =0; i <Item.length;i++){
            totalPrice += Item.quantity * Item.price;
        }

        return totalPrice;
    }
}

export default Order;