import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { ForgotComponent } from './components/forgot/forgot.component';
import { GetBooksComponent } from './components/get-books/get-books.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { OrderComponent } from './components/order/order.component';
import { AdminComponent } from './components/admin/admin.component'
import {AuthguardGuard} from './authguard.guard';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminRegistrationComponent } from './components/admin-registration/admin-registration.component';
import { AddBooksComponent } from './components/add-books/add-books.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { FilterPipe } from './components/app-pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    GetBooksComponent,
    ProfileComponent,
    CartComponent,
    WishlistComponent,
    OrderComponent,
    AdminComponent,
    AdminDashboardComponent,
    AdminRegistrationComponent,
    AddBooksComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    JwPaginationModule,
  ],
  providers: [AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
