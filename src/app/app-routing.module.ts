import { ProductInsertScreenComponent } from './product-insert-screen/product-insert-screen.component';
import { HomeComponent } from './home/home.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'product', component: ProductInsertScreenComponent , canActivate:[AuthGuard]}
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}