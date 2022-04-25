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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoadingSpinnerComponent} from "./shared/loading-spinner/loading-spinner.component";
import {AuthInterceptorService} from "./auth/auth-interceptor.service";
import {AuthService} from "./auth/auth.service";
import {ShoesService} from "./shoes/shoes.service";
import { ShoesDetailsComponent } from './shoes/shoes-details/shoes-details.component';

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
    ShoesEditComponent,
    LoadingSpinnerComponent,
    ShoesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    ShoesService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
