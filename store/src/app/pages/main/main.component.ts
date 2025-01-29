import { Component } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { Product } from '../../shared/interfaces/product.model';
import { CommonModule } from '@angular/common';

import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone:true,
  imports: [MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    RouterModule,
    CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  constructor(private router:Router){}

  
  products: Product[] = [
    { id : 1, name: 'Gucci Jacket', price: 1200, imageUrl: '' },
    { id:2,name: 'LV Sneakers', price: 950, imageUrl: '' },
    { id:3,name: 'Balenciaga Hoodie', price: 850, imageUrl: '' },
    { id : 4,name: 'Versace Coat', price: 1500, imageUrl: '' },
    { id: 5,name: 'Basic T-Shirt', price: 50, imageUrl: '' },
    { id:6,name: 'Casual Jeans', price: 70, imageUrl: '' },
    { id:7,name: 'Everyday Sneakers', price: 90, imageUrl: '' },
    { id :8,name: 'Minimalist Cap', price: 30, imageUrl: '' }
  ];

  get expensiveProducts(): Product[] {
    return this.products.filter(product => product.price >= 800);
  }

  get cheapProducts(): Product[] {
    return this.products.filter(product => product.price < 100);
  }


  navigateToProducts(){
    this.router.navigate(['/products']);
  }


}
