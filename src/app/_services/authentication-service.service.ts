import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  
  constructor(private http: HttpClient) { }
//let data:any;
  login(data:any) {
    return this.http.post<any>(`http://localhost:5001/api/Auth`,data);
  }
}
