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

  /** Получить список заказов */
  getOrders(): Observable<Order[]> {
    return this.ordersSubject.asObservable();
  }

  /** Добавить новый заказ */
  addOrder(product: Product, quantity: number): void {
    const newOrder: Order = {
      id: this.orders.length + 1,
      product,
      quantity,
      totalPrice: product.price * quantity,
    };
    this.orders.push(newOrder);
    this.ordersSubject.next([...this.orders]); // Обновляем поток данных
  }

  /** Удалить заказ */
  removeOrder(orderId: number): void {
    this.orders = this.orders.filter(order => order.id !== orderId);
    this.ordersSubject.next([...this.orders]);
  }
}
