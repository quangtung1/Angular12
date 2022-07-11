import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {
private REST_API_SERVER = 'http://localhost:3000';

private REST_API_SERVER2 = 'https://randomuser.me/api/?result=';

private httpOptions = {
  headers : new HttpHeaders({
    'Content-type':'application/json'
  })
};
constructor(private httpClient: HttpClient) { }

public getComments(): Observable<any>{
  const url =`${this.REST_API_SERVER}/comments`;
  return this.httpClient.get<any>(url,this.httpOptions);
}

public getComments2(user: number=1): Observable<any>{
  const url =`${this.REST_API_SERVER2}`+ user;
  console.log(url);
  return this.httpClient.get<any>(url,this.httpOptions);
}

// public getUser(): Observable<any>{{
//   return {this.httpClient.get(this.REST_API_SERVER2).Pipe(catchError(this.handleError))};
// }

public postMethod(payload: any): Observable<any>{
  const url =`${this.REST_API_SERVER}/comments`;
  console.log('postMethodurl : ', payload);
  return this.httpClient.post<any>(url,payload,this.httpOptions);
}

}
