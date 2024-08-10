import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpService } from './http.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReqService {

  constructor(
    private httpService: HttpService,
  ) { }

  customers(): Observable<any> {
		return this.httpService.get_req('ruwenzori/customers');
	}

  vendors(): Observable<any> {
		return this.httpService.get_req('ruwenzori/vendors');
	}
}
