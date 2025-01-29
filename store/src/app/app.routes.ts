import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
    {path:'main',component:MainComponent},
    {path:'',redirectTo:'main',pathMatch:'full'},
    {path:'products', component:ProductsComponent}
];
