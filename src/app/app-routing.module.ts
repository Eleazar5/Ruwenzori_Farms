import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IntroComponent } from './pages/intro/intro.component';
import { ResetComponent } from './reset/reset.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginOtpComponent } from './login-otp/login-otp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CookiesConsentComponent } from './Components/cookies-consent/cookies-consent.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { VendorsComponent } from './pages/vendors/vendors.component';
import { SalesComponent } from './pages/sales/sales.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { MessagesComponent } from './pages/messages/messages.component';

import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'reset_password', 
    component: ResetComponent 
  },
  { 
    path: 'index', 
    component: HomepageComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'customers', pathMatch: 'full', component: CustomersComponent },
      { path: 'vendors', pathMatch: 'full', component: VendorsComponent },
      { path: 'sales', pathMatch: 'full', component: SalesComponent },
      { path: 'profile', pathMatch: 'full', component: ProfileComponent },
      { path: 'messages', pathMatch: 'full', component: MessagesComponent },
      { path: 'notifications', pathMatch: 'full', component: NotificationsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ]
  },
  { 
    path: 'otp_verification', 
    component: LoginOtpComponent 
  },
  { 
    path: 'dataprivacy', 
    component: CookiesConsentComponent 
  },
  { 
    path: '', 
    pathMatch: 'full', 
    component: IntroComponent // Set IntroComponent as the default component for the empty path
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
