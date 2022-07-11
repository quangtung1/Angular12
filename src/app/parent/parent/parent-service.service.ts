import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParentServiceService {

  private API_SERVER = 'https://randomuser.me/api/?results=10';

  private httpOptions = {
    headers : new HttpHeaders({
      'Authorization':'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJVT1lxeDhINFNpdzhrOEhYeTB0aTZrbzNxUG5VeFBsTGVUbDJUS0duZGU4In0.eyJleHAiOjE2NTczNTI5NDYsImlhdCI6MTY1NzM1MTE0NiwianRpIjoiMDkzMjRjYjQtMjkyMi00ZTY3LWIzOGItMGJlNTk1YzUwM2E2IiwiaXNzIjoiaHR0cDovLzEwLjUwLjk5LjIwNDo4MDgwL2F1dGgvcmVhbG1zL2RlZmF1bHQiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiMGYxODljMjQtZTlkNS00ODkyLTg1MzMtM2Y5ODc4NDljMGIwIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZGVtbyIsInNlc3Npb25fc3RhdGUiOiJjZTZkMTkxYS1jYmYwLTQzMDgtOTk5Zi01ZDc3M2Y0MjkzMDkiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtZGVmYXVsdCIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwic2lkIjoiY2U2ZDE5MWEtY2JmMC00MzA4LTk5OWYtNWQ3NzNmNDI5MzA5IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiTmd1eWVuIFF1YW5nIFR1bmciLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0dW5nbnEiLCJnaXZlbl9uYW1lIjoiTmd1eWVuIiwiZmFtaWx5X25hbWUiOiJRdWFuZyBUdW5nIiwiZW1haWwiOiJ0dW5nbnFAdW5pY2xvdWQuY29tLnZuIn0.OcCoEQostY_hw76Kw2Xmb3Z7LvYjx8LSySqYyhgPGJ39OIwgtjRPmPeo_NUjtJSZ3ymSoeRcNjKwPBEyncP4ccWObXsSlbcU35Jni1Q6sj4GuFs03B8p_kRWb-gxsbEu_xwUCjjDbspAuN9cUed0NJ5L28ehF1bI2rLbMW2OppWuklxFWcoPpKE9hFNakxTUCRKwXaFLej2BARwaVskk-_RT6cozdrWLI0zOR0tQs8fWvHQGJhx-07zdj9RpqElKGRhyEdAHlJU0LX6RXij4NoyIJFrEDkxCe4XP6VCRQv6sJwB4nBhphN8IZ08SuhKavCEndg1gu2-w_zBRi8VlpQ'
    })
  };
constructor(private httpCliet : HttpClient,) { }

public getApi(object: any): Observable<any>{
  //debugger
  return this.httpCliet.post<any>('http://localhost:8888/admin/api/app/smartai-module/execute-handler/MLOGIN/001/Y',object,this.httpOptions )
}

public getCallApi(): Observable<any>{
  return this.httpCliet.get<any>(this.API_SERVER,this.httpOptions);
}


}
