import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  
  private baseUrl='http://localhost:2000/apii/customers';
  constructor(private http:HttpClient) { }
  createUser(admin : any): Observable<any>{
    return this.http.post(this.baseUrl,admin);
  }
  getCustomerByType(type: string):Observable<any>{
  return this.http.get(`${this.baseUrl}/type/${type}`);
  }
  getPolicy(id : number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
   
}
