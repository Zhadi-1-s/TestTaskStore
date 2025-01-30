import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../shared/interfaces/product.model';
import { OrderService } from '../../shared/services/order.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatToolbarModule, MatCardModule, MatButtonModule, CommonModule,RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  product?: Product;

  private products: Product[] = [
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

  constructor(private orderService: OrderService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.getProductById(productId);

    if (!this.product) {
      console.error(`Product with ID ${productId} not found.`);
    }
  }

  addToCart(): void {
    if (this.product) {
      this.orderService.addToCart(this.product, 1);
    }
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
