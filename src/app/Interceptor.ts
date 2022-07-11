import { Injectable,Injector } from "@angular/core";
import { HttpEvent,HttpInterceptor,HttpHandler,HttpRequest,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
// import { request } from "https";

// import { Observable } from "rxjs/Rx";
// import { request } from "http";


@Injectable()
export class Interceptor implements HttpInterceptor{
constructor(){}
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const token = 'MyToken';

      const headers = new HttpHeaders().set('access-token',token).set('Authorization','Bearer ' + token);


      const AuthReq = req.clone({headers:headers});
      return next.handle(AuthReq);

}

}
