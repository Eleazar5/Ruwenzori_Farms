import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  //Use token
  post_req(serviceName: string, data: any, token = null) {				
		const headers = new HttpHeaders({
		    'Content-Type':'application/json',
		    'Authorization': 'Bearer ' + token
		});
		
		const options = { headers: headers, withCredintials: false };
		let url = environment.apiUrl + serviceName;

		return this.http.post(url, JSON.stringify(data), options);
	}

  put_req(serviceName: string, data: any, token = null) {				
		const headers = new HttpHeaders({
		    'Content-Type':'application/json',
		    'Authorization': 'Bearer ' + token
		});
		
		const options = { headers: headers, withCredintials: false };
		let url = environment.apiUrl + serviceName;

		return this.http.put(url, JSON.stringify(data), options);
	}

  get_req(serviceName: string, token = null) {				
		const headers = new HttpHeaders({
		    'Content-Type':'application/json',
		    'Authorization': 'Bearer ' + token
		});
		
		const options = { headers: headers, withCredintials: false };
		let url = environment.apiUrl + serviceName;

		return this.http.get(url, options);
	}

  del_req(serviceName: string, token = null) {				
		const headers = new HttpHeaders({
		    'Content-Type':'application/json',
		    'Authorization': 'Bearer ' + token
		});
		
		const options = { headers: headers, withCredintials: false };
		let url = environment.apiUrl + serviceName;

		return this.http.delete(url, options);
	}

//   //Not using auth token
//   open_post_req(serviceName: string, data: any, id = null) {				
// 		const headers = new HttpHeaders({
// 		    'Content-Type':'application/json'
// 		});
		
// 		const options = { headers: headers, withCredintials: false };
// 		let url = environment.apiUrl + serviceName;

// 		if (id) {
// 			url = environment.apiUrl + serviceName +'/'+ id;
// 		}
// 		return this.http.post(url, JSON.stringify(data), options);
// 	}

//   open_put_req(serviceName: string, data: any, id = null) {				
// 		const headers = new HttpHeaders({
// 		    'Content-Type':'application/json'
// 		});
		
// 		const options = { headers: headers, withCredintials: false };
// 		let url = environment.apiUrl + serviceName;

// 		if (id) {
// 			url = environment.apiUrl + serviceName +'/'+ id;
// 		}
// 		return this.http.put(url, JSON.stringify(data), options);
// 	}

//   open_get_req(serviceName: string, id = null) {				
// 		const headers = new HttpHeaders({
// 		    'Content-Type':'application/json'
// 		});
		
// 		const options = { headers: headers, withCredintials: false };
// 		let url = environment.apiUrl + serviceName;

// 		if (id) {
// 			url = environment.apiUrl + serviceName +'/'+ id;
// 		}
// 		return this.http.get(url, options);
// 	}

	verify_token_req(serviceName: string, token: string) {				
		const headers = new HttpHeaders({
		'Authorization': 'Bearer ' + token,
		'Content-Type': 'application/json',
		});

		const options = { headers: headers };

		const url = environment.apiUrl + serviceName;

		return this.http.post(url, null, options); 
	}
}
