import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      debugger
console.log('canActive: ', route,state);
if(state.url.includes('pagenotfound')){
  console.error('Bạn không được phép truy cập vào đây');
  return false;
}
    console.log('Vào đê bạn ơi');
    return true;
  }

}
