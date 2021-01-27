import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component'
import { CartPageComponent } from './pages/cart-page/cart-page.component'
import { MyOrdersPageComponent } from './pages/my-orders-page/my-orders-page.component'
import { ProductPageComponent } from './pages/product-page/product-page.component'

const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  { path: 'cart', component: CartPageComponent },
  { path: 'my-orders', component: MyOrdersPageComponent },
  { path: 'product/:id', component: ProductPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
