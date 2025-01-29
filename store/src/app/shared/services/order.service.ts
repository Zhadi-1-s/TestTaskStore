import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../interfaces/order.model';
import { Product } from '../interfaces/product.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders: Order[] = [];
  private ordersSubject = new BehaviorSubject<Order[]>(this.orders);

  constructor() {}

  // добавляем продукт в нашу якобы корзину
  addToCart(product: Product, quantity: number) {
    const orderExists = this.orders.find(order => order.product.id === product.id);

    if (orderExists) {
      
      orderExists.quantity += quantity;
      orderExists.totalPrice = orderExists.quantity * orderExists.product.price;
    } else {
      
      const newOrder: Order = {
        id: this.orders.length + 1,
        product,
        quantity,
        totalPrice: product.price * quantity
      };
      this.orders.push(newOrder);
    }

    this.ordersSubject.next(this.orders);
  }

  getOrders() {
    return this.ordersSubject.asObservable();
  }

  
  removeFromCart(orderId: number) {
    this.orders = this.orders.filter(order => order.id !== orderId);
    this.ordersSubject.next(this.orders);
  }

 
  clearCart() {
    this.orders = [];
    this.ordersSubject.next(this.orders);
  }
}
