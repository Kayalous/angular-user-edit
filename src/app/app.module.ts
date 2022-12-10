import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { UserCardComponent } from './user-card/user-card.component';

import { MatMenuModule } from '@angular/material/menu';

import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarihubLogoNavbarComponent } from './marihub-logo-navbar/marihub-logo-navbar.component';
import { NavbarLinkComponent } from './navbar-link/navbar-link.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { ShopComponent } from './shop/shop.component';
import { OrdersComponent } from './orders/orders.component';
import { AccountConfigComponent } from './account-config/account-config.component';
import { NoAccessComponent } from './no-access/no-access.component';

const routes: Routes = [
  { path: 'home', component: ListOfUsersComponent },
  { path: 'dashboard/main', component: DashboardComponent },
  { path: 'dashboard/shop', component: ShopComponent },
  { path: 'dashboard/orders', component: OrdersComponent },
  { path: 'dashboard/account-config', component: AccountConfigComponent },
  // redirects
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'dashboard', redirectTo: '/dashboard/main', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ListOfUsersComponent,
    EmptyStateComponent,
    AddUserDialogComponent,
    UserFormComponent,
    UserCardComponent,
    DashboardComponent,
    MarihubLogoNavbarComponent,
    NavbarLinkComponent,
    NavbarComponent,
    LayoutComponent,
    ShopComponent,
    OrdersComponent,
    AccountConfigComponent,
    NoAccessComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule,
    AppRoutingModule,
  ],
  entryComponents: [MatDialogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
