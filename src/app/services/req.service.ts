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

  savecustomers(postdata: any): Observable<any> {
		return this.httpService.post_req('ruwenzori/new_customer', postdata);
	}

  vendors(): Observable<any> {
		return this.httpService.get_req('ruwenzori/vendors');
	}

  savevendor(postdata: any): Observable<any> {
		return this.httpService.post_req('ruwenzori/new_vendor', postdata);
	}

  sales(): Observable<any> {
		return this.httpService.get_req('ruwenzori/sales');
	}

  savesale(postdata: any): Observable<any> {
		return this.httpService.post_req('ruwenzori/new_sale', postdata);
	}

  products(): Observable<any> {
		return this.httpService.get_req('ruwenzori/products');
	}

  saveproduct(postdata: any): Observable<any> {
		return this.httpService.post_req('ruwenzori/new_product', postdata);
	}

  count_stats(): Observable<any> {
		return this.httpService.get_req('ruwenzori/count_stats');
	}
}
