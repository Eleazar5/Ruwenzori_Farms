import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string = '';
  phone: any = '';
  fullname: string = '';
  password: string = '';
  errorMessage: string = '';
  registerData: object = {}

  constructor(
    private authService: AuthService
  ) {  }

  ngOnInit() {
  }

  clearError(){
    this.errorMessage="";
  }

  register() {  
    if(this.username == "") {
      this.errorMessage="Email is required"
      return
    }
    if(this.phone == "") {
      this.errorMessage="Phone Number is required"
      return
    }
    if(this.fullname == "") {
      this.errorMessage="Full Name is required"
      return
    }
    if(this.password == "") {
      this.errorMessage="Password is required"
      return
    }
     this.registerData = {
      "email": this.username,
      "password": this.password
     } 

    console.log(this.registerData)
  }

}
