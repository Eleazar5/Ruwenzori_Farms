import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IntroComponent } from './pages/intro/intro.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginOtpComponent } from './login-otp/login-otp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { 
    path: '', 
    pathMatch: 'full', 
    redirectTo: '' 
  },
  { 
    path: '', 
    component: IntroComponent 
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'register', 
    component: RegisterComponent 
  },
  { 
    path: 'home', 
    // canActivate: [authGuard],
    component: HomepageComponent 
  },
  { 
    path: 'otp_verification', 
    component: LoginOtpComponent 
  },
  { 
    path: '**', 
    canActivate: [authGuard],
    component: PageNotFoundComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
