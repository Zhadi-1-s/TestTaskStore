import { Component } from '@angular/core';

import { OnInit } from '@angular/core';
import { OrderService } from '../../shared/services/order.service';

import { Order } from '../../shared/interfaces/order.model';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone:true,
  imports: [MatToolbarModule,MatCardModule,MatButtonModule,CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {

  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
    });
  }

  removeOrder(orderId: number) {
    this.orderService.removeFromCart(orderId);
  }

}
