import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { ShoesComponent } from './shoes/shoes.component';
import { CartComponent } from './cart/cart.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import { FiltersComponent } from './shoes/filters/filters.component';
import { ShoesListComponent } from './shoes/shoes-list/shoes-list.component';
import { ShoesItemComponent } from './shoes/shoes-list/shoes-item/shoes-item.component';
import { FooterComponent } from './footer/footer.component';
import { ShoesEditComponent } from './shoes/shoes-edit/shoes-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    ShoesComponent,
    CartComponent,
    FiltersComponent,
    ShoesListComponent,
    ShoesItemComponent,
    FooterComponent,
    ShoesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
