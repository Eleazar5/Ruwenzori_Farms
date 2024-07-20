import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent {
  username: string = '';
  idnumber: any = '';

  errorMessage: string = '';
  resetData: object = {}

  constructor(
    private authService: AuthService
  ) {  }

  ngOnInit() {
  }

  clearError(){
    this.errorMessage="";
  }

  reset_password() {  
    if(this.username == "") {
      this.errorMessage="Email is required"
      return
    }
    if(this.idnumber == "") {
      this.errorMessage="ID Number is required"
      return
    }
   
     this.resetData = {
      "email": this.username,
      "idnumber": this.idnumber
     } 

    console.log(this.resetData)
  }

}
