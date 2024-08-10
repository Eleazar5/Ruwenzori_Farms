import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NotificationsService } from '../services/notifications.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login-otp',
  templateUrl: './login-otp.component.html',
  styleUrls: ['./login-otp.component.scss']
})
export class LoginOtpComponent implements OnInit{
  email: any = "";
  otpDigits: string[] = Array(6).fill('');
  otpData: object = {};
  errorMessage: string = '';
  countdownDuration: number = 10;
  countdownMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private notifyService: NotificationsService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.email = this.storageService.getData('userMail');
    this.startCountdown();
    this.checkAuth();
  }

  checkAuth(): void {
    const token = this.storageService.getData('userToken');

    this.authService.verify_validtoken(token).subscribe(
      (res: any) => {
        console.log(res);
        if (res.success === 1) {
          this.router.navigate(['/index']);
        }
      },
      (error: any) => {
        console.error('Error checking token validity:', error);
      }
    );
  }

  startCountdown(): void {
    const countdownInterval = setInterval(() => {
      this.countdownMessage = `Time remaining: ${this.countdownDuration} seconds`;

      if (this.countdownDuration === 0) {
        clearInterval(countdownInterval);
      } else {
        this.countdownDuration--;
      }
    }, 1000);
  }

  onOtpInputChange(index: number, event: any) {
    const inputValue = event.target.value;
    
    if (/^\d$/.test(inputValue)) {
      this.otpDigits[index] = inputValue;

      if (index < this.otpDigits.length - 1 && inputValue !== '') {
        const nextIndex = index + 1;
        const nextInput = document.getElementById(`otp${nextIndex}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  }

  resendOTP() {
    this.otpData = {
      "email": this.email
     } 
    this.authService.resend_otp(this.otpData).subscribe(
      (res: any) => {        
        if(res.success == 0) {
          this.notifyService.showError(res.errorDesc)
        }else{
          this.notifyService.showSuccess(res.errorDesc)
        }
      },  
      (error: any) => {         
        console.log(error)
      }
    );
  }

  verifyEmailOTP() {
    const enteredOTP = this.otpDigits.join('');
    this.otpData = {
      "email": this.email,
      "auth_otp": enteredOTP
     } 
    this.authService.verify_otp(this.otpData).subscribe(
      (res: any) => {        
        if(res.success == 0) {
          // this.errorMessage=res.errorDesc;
          this.notifyService.showWarning(res.errorDesc)
        }else{
          console.log(res)
          this.storageService.storeItem('userToken', res.token)
          this.storageService.storeItem('userData', JSON.stringify(res.user))
          this.router.navigate(['/index']);
        }
      },  
      (error: any) => {         
        console.log(error)
      }
    );
  }
}
