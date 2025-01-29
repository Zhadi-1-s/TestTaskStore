import { Component } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { Product } from '../../shared/interfaces/product.model';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone:true,
  imports: [MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  

  constructor(private router:Router){}

  product:Product[] = [];
  expensiveProducts = [
    { name: 'Gucci Jacket', price: 1200, image: 'assets/gucci-jacket.jpg' },
    { name: 'LV Sneakers', price: 950, image: 'assets/lv-sneakers.jpg' },
    { name: 'Balenciaga Hoodie', price: 850, image: 'assets/balenciaga-hoodie.jpg' },
    { name: 'Versace Coat', price: 1500, image: 'assets/versace-coat.jpg' }
  ];

  cheapProducts = [
    { name: 'Basic T-Shirt', price: 50, image: 'assets/basic-tshirt.jpg' },
    { name: 'Casual Jeans', price: 70, image: 'assets/casual-jeans.jpg' },
    { name: 'Everyday Sneakers', price: 90, image: 'assets/everyday-sneakers.jpg' },
    { name: 'Minimalist Cap', price: 30, image: 'assets/minimalist-cap.jpg' }
  ];

  navigateToProducts(){
    this.router.navigate(['/products']);
  }

}
