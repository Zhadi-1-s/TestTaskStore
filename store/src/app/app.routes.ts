import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { OrderComponent } from './pages/order/order.component';

export const routes: Routes = [
    {path:'main',component:MainComponent},
    {path:'',redirectTo:'main',pathMatch:'full'},
    {path:'products', component:ProductsComponent},
    { path: 'product/:id', component: ProductComponent },
    { path: 'orders', component: OrderComponent }
];
