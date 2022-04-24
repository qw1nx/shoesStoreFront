import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShoesComponent} from "./shoes/shoes.component";
import {ShoesEditComponent} from "./shoes/shoes-edit/shoes-edit.component";
import {ShoesListComponent} from "./shoes/shoes-list/shoes-list.component";
import {CartComponent} from "./cart/cart.component";
import {AuthComponent} from "./auth/auth.component";

const routes: Routes = [
  {path: '', redirectTo: '/catalog', pathMatch: 'full'},
  {path: 'catalog', component: ShoesComponent, children: [
      {path: '', component: ShoesListComponent},
     {path: 'new', component: ShoesEditComponent}
    ]},
  { path: 'cart', component: CartComponent },
  { path: 'auth', component: AuthComponent },
  { path: '**', redirectTo: '/catalog' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
