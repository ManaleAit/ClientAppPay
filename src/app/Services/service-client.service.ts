import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class ServiceClientService {
  private baseUrl = 'https://ensaspay-zuul-gateway.herokuapp.com/api/client/creationRequest/';

  constructor(private http: HttpClient,private auth: AuthenticationService) { }

  demandeCreateClient(Client: Object): any {
    var config = {headers: {
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'responseType': 'text' as 'json',
      'Authorization': `Bearer ${this.auth.getToken()}`,}
     
  }

    return this.http.post(`${this.baseUrl}${localStorage.getItem('tel')}`, Client,config);
  }
 

  getClientList():Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  
  createClient(Client: Object): any {
    return this.http.post(`${this.baseUrl}`, Client);
  }
 

  updateClient(value: any): any {
    return this.http.put(`${this.baseUrl}`, value);
  }

  deleteClient(id: any): any {
    return this.http.delete(`${this.baseUrl}${id}`, { responseType: 'text' });
  }

  getClient(id: any): any {
    return this.http.get(`${this.baseUrl}${id}`);
  }
 
}
