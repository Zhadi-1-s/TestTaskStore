import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../interfaces/order.model';
import { Product } from '../interfaces/product.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders: Order[] = [];
  private ordersSubject = new BehaviorSubject<Order[]>(this.loadOrders());

  constructor() {}

  
  private loadOrders(): Order[] {
    const savedOrders = localStorage.getItem('orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  }


  private saveOrders() {
    localStorage.setItem('orders', JSON.stringify(this.orders));
  }

 
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

    this.saveOrders(); 
    this.ordersSubject.next(this.orders);
  }

  getOrders() {
    return this.ordersSubject.asObservable();
  }


  removeFromCart(orderId: number) {
    this.orders = this.orders.filter(order => order.id !== orderId);
    this.saveOrders();  // сохраняем
    this.ordersSubject.next([...this.orders]); 
  }


  clearCart() {
    this.orders = [];
    this.saveOrders();  
    this.ordersSubject.next(this.orders);
  }
}
