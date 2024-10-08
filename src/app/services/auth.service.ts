import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpService } from './http.service';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpService: HttpService,
    private router: Router,
    private storageService: StorageService
  ) { }

  login(postData: any): Observable<any> {
		return this.httpService.post_req('auth/sign_in', postData);
	}

  verify_otp(postData: any): Observable<any> {
		return this.httpService.post_req('auth/confirm_otp', postData);
	}

  resend_otp(postData: any): Observable<any> {
		return this.httpService.post_req('auth/resend_otp', postData);
	}

  verify_validtoken(postData: any): Observable<any> {
		return this.httpService.verify_token_req('auth/authenticated', postData);
	}
  
  logout(){
    this.storageService.clearData();
    this.router.navigate(['/login']);
  }

}

