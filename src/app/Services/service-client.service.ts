import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class ServiceClientService {
  private baseUrl = 'https://ensaspay-zuul-gateway.herokuapp.com/api/client/';

  constructor(private http: HttpClient,private auth: AuthenticationService) { }

  demandeCreateClient(Client: Object): any {
    var config = {headers: {
      'Content-Type' : 'application/json; charset=utf-8',
      'Accept'       : 'application/json',
      /*'Access-Control-Allow-Origin':'*',*/
      'Authorization': `Bearer ${this.auth.getToken()}`,}
     
  }

    return this.http.post(`${this.baseUrl}${"creationRequest/"}${localStorage.getItem('tel')}`, Client,config);
  }
 

  getClientList():Observable<any[]> {
    var config = {headers: {
      'Content-Type' : 'application/json; charset=utf-8',
      'Accept'       : 'application/json',
      /*'Access-Control-Allow-Origin':'*',*/
      'Authorization': `Bearer ${this.auth.getToken()}`,}
     
  }

    return this.http.get<any[]>(`${this.baseUrl}${"getByAgent/"}${"0650170040"}`,config);
  }
//localStorage.getItem('tel')
  
  createClient(Client: Object): any {
    return this.http.post(`${this.baseUrl}`, Client);
  }
 

  updateClient(value: any): any {
    return this.http.put(`${this.baseUrl}`, value);
  }

  deleteClient(id: any): any {
    var config = {headers: {
      'Content-Type' : 'application/json; charset=utf-8',
      'Accept'       : 'application/json',
      /*'Access-Control-Allow-Origin':'*',*/
      'Authorization': `Bearer ${this.auth.getToken()}`,}}
    return this.http.delete(`${this.baseUrl}${id}`,config);
  }

  getClient(id: any): any {
    return this.http.get(`${this.baseUrl}${id}`);
  }
 
}
