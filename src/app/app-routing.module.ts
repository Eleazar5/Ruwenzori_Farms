import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IntroComponent } from './pages/intro/intro.component';
import { ResetComponent } from './reset/reset.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginOtpComponent } from './login-otp/login-otp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CookiesConsentComponent } from './Components/cookies-consent/cookies-consent.component';
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
    path: 'home', 
    component: HomepageComponent 
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
