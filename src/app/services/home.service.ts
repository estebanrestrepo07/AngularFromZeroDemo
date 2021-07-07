import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiurl:string = "https://www.breakingbadapi.com/api/"
  constructor(private http: HttpClient) { }
  getApiInfo():any{         
     return this.http.get(`${this.apiurl}characters`);
  }
}