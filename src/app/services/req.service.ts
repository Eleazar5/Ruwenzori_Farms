import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpService } from './http.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ReqService {
  constructor(private httpService: HttpService) {}

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

  deletecustomer(postdata: any): Observable<any> {
    return this.httpService.del_req('ruwenzori/delete_customer/' + postdata);
  }

  deletevendor(postdata: any): Observable<any> {
    return this.httpService.del_req('ruwenzori/delete_vendor/' + postdata);
  }

  deletesale(postdata: any): Observable<any> {
    return this.httpService.del_req('ruwenzori/delete_sale/' + postdata);
  }

  deleteproduct(postdata: any): Observable<any> {
    return this.httpService.del_req('ruwenzori/delete_product/' + postdata);
  }

  getCustomerById(postdata: any): Observable<any> {
    return this.httpService.get_req('ruwenzori/getcustomer_by_id/' + postdata);
  }

  updateCustomer(paramsdata: any, postdata: any): Observable<any> {
    return this.httpService.put_req('ruwenzori/update_customer/' + paramsdata, postdata);
  }
}
