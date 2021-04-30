import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { GetBooksComponent } from './components/get-books/get-books.component'
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import {AuthguardGuard} from './authguard.guard';
import {AdminComponent} from './components/admin/admin.component';
import {AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component'
import {AdminRegistrationComponent} from './components/admin-registration/admin-registration.component';
import {AddBooksComponent} from './components/add-books/add-books.component'
import {OrderSuccessComponent} from './components/order-success/order-success.component'

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent,
    canActivate: [AuthguardGuard],
    children: [
      { path: 'books', component: GetBooksComponent,},
      { path: 'profile', component: ProfileComponent },
      { path: 'cart', component: CartComponent },
      { path: 'wishlist', component: WishlistComponent },
      {path:"orderSuccess",component:OrderSuccessComponent},
    ]
  },
  {path: 'reg', component: AdminRegistrationComponent,},
  {path: 'adminLogin', component: AdminComponent},
  {path: 'admindashboard', component: AdminDashboardComponent,
  canActivate: [AuthguardGuard],
  children: [
    { path: 'book', component: AddBooksComponent,},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }