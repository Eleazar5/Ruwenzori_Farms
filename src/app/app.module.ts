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
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { HeaderComponent } from './pages/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IntroComponent } from './pages/intro/intro.component';
import { HomeComponent } from './Components/Landing/home/home.component';
import { AboutComponent } from './Components/Landing/about/about.component';
import { ServicesComponent } from './Components/Landing/services/services.component';
import { ContactComponent } from './Components/Landing/contact/contact.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CookiesConsentComponent } from './Components/cookies-consent/cookies-consent.component';

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
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    IntroComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    CookiesConsentComponent
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
