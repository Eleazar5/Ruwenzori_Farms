import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthOtpComponent } from './models/auth-otp/auth-otp.component';
import { LoginOtpComponent } from './login-otp/login-otp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IntroComponent } from './pages/intro/intro.component';
import { HomeComponent } from './Components/Landing/home/home.component';
import { AboutComponent } from './Components/Landing/about/about.component';
import { ServicesComponent } from './Components/Landing/services/services.component';
import { ContactComponent } from './Components/Landing/contact/contact.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CookiesConsentComponent } from './Components/cookies-consent/cookies-consent.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { VendorsComponent } from './pages/vendors/vendors.component';
import { SalesComponent } from './pages/sales/sales.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { MessagesComponent } from './pages/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetComponent,
    HomepageComponent,
    ProfileComponent,
    AuthOtpComponent,
    LoginOtpComponent,
    PageNotFoundComponent,
    DashboardComponent,
    IntroComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    CookiesConsentComponent,
    CustomersComponent,
    VendorsComponent,
    SalesComponent,
    NotificationsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
