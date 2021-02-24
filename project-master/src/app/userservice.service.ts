import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  
  private baseUrl='http://localhost:2000/api/customers';
  constructor(private http:HttpClient) { }
  createCustomer(admin : any): Observable<any>{
    return this.http.post(this.baseUrl,admin);
  }
  createPolicy(policy : any): Observable<any>{
    return this.http.post(`${this.baseUrl}`+`/policy`,policy);
  }
  getPolicyList():Observable<any>{
    return this.http.get(`${this.baseUrl}`+`/policy`);
  }
  getPolicy(id : number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  updateCustomer(policy :object):Observable<object>{
    return this.http.put(`${this.baseUrl}`+`/update`,policy);
  }
  
}
