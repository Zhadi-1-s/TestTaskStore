import { Component } from '@angular/core';

import { Product } from '../../shared/interfaces/product.model';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../shared/services/order.service';

@Component({
  selector: 'app-products',
  standalone:true,
  imports: [MatToolbarModule,MatCardModule,MatButtonModule,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: Product[] = [
    { id: 1, name: 'Gucci Jacket', price: 1200, imageUrl: '' },
    { id: 2, name: 'LV Sneakers', price: 950, imageUrl: '' },
    { id: 3, name: 'Balenciaga Hoodie', price: 850, imageUrl: '' },
    { id: 4, name: 'Versace Coat', price: 1500, imageUrl: '' },
    { id: 5, name: 'Basic T-Shirt', price: 50, imageUrl: '' },
    { id: 6, name: 'Casual Jeans', price: 70, imageUrl: '' },
    { id: 7, name: 'Everyday Sneakers', price: 90, imageUrl: '' },
    { id: 8, name: 'Minimalist Cap', price: 30, imageUrl: '' },
    { id: 9, name: 'Prada Sunglasses', price: 450, imageUrl: '' },
    { id: 10, name: 'Chanel Handbag', price: 2500, imageUrl: '' },
    { id: 11, name: 'Tom Ford Suit', price: 2200, imageUrl: '' },
    { id: 12, name: 'Nike Air Max', price: 130, imageUrl: '' },
    { id: 13, name: 'Adidas Hoodie', price: 120, imageUrl: '' },
    { id: 14, name: 'Ray-Ban Aviators', price: 150, imageUrl: '' },
    { id: 15, name: 'H&M Joggers', price: 40, imageUrl: '' },
    { id: 16, name: 'Zara Boots', price: 100, imageUrl: '' },
    { id: 17, name: 'Levi’s Denim Jacket', price: 85, imageUrl: '' },
    { id: 18, name: 'Burberry Scarf', price: 300, imageUrl: '' },
    { id: 19, name: 'Hermes Belt', price: 600, imageUrl: '' },
    { id: 20, name: 'Fendi Backpack', price: 1200, imageUrl: '' }
    
  ];

  constructor(private orderService:OrderService){}

   // Add product to the cart
   addToCart(product: Product, quantity: number) {
    this.orderService.addToCart(product, quantity);
  }

}