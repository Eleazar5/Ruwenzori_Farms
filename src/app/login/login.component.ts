import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  loginData: object = {}

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {  }

  ngOnInit():void {
    this.checkAuth();
  }

  checkAuth(): void {
    const token = this.storageService.getData('userToken');

    this.authService.verify_validtoken(token).subscribe(
      (res: any) => {
        console.log(res);
        if (res.success === 1) {
          this.router.navigate(['/home']);
        }
      },
      (error: any) => {
        console.error('Error checking token validity:', error);
      }
    );
  }

  clearError(){
    this.errorMessage="";
  }

  login() {  
    if(this.username == "") {
      this.errorMessage="Email is required"
      return
    }
    if(this.password == "") {
      this.errorMessage="Password is required"
      return
    }
     this.loginData = {
      "email": this.username,
      "password": this.password
     } 

      this.authService.login(this.loginData).subscribe(
        (res: any) => {        
          if(res.success == 0) {
            this.errorMessage=res.errorDesc;
          }else{
            this.storageService.storeItem('userMail', this.username)
            this.router.navigate(['/otp_verification']);
          }
        },  
        (error: any) => {         
          console.log(error)
        }
      );
  }

}
