import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {BehaviorSubject, exhaustMap, Observable, skipWhile, take} from "rxjs";
import {UserModel} from "./user.model";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthService) {
  }
  //
  // createAuthorizationHeader(headers: Headers, user:any){
  //   headers.append('x-authorization', user.token)
  // }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return this.authService.user.pipe(skipWhile(value => !value),take(1).subscribe(user =>{
    //
    // }))

    return this.authService.user.pipe(take(1), exhaustMap((user: UserModel) => {
      console.log(req);
      if (!user){
        console.log('no user apparantly', user)
        return next.handle(req);
      }

      const modifiedReq = req.clone({params: new HttpParams().set('user', JSON.stringify(user))})
      const secondModification = modifiedReq.clone({headers: new HttpHeaders().set('X-Authorization', user._token)})
      console.log('Second modified request',secondModification)
      return next.handle(secondModification);
    }))

    // this.authService.user.pipe(take(1)).subscribe(data => {
    //   console.log('this is in data',data)
    //   if (data){
    //     userActual = data;
    //     const modifiedReq = req.clone({headers: new HttpHeaders().set('x-authorization', userActual._token)})
    //     const twiceModified = modifiedReq.clone({params: new HttpParams().set('user', JSON.stringify(userActual))})

    //     console.log('twice modified',twiceModified);
    //     return next.handle(twiceModified);
    //   }
    //   return next.handle(req);
    // })
    // return next.handle(req);

    // return this.authService.user.pipe(take(1), exhaustMap(user => {
    //   if (!user){
    //     return next.handle(req);
    //   }

    // let user:UserModel;
    //
    // const subsc = return this.authService.user.subscribe(user =>{
    //   this.user = user
    // })
    //
    //
    //
    // const isLoggedin = user?.token
    //
    //   console.log(user)
    //
    //   // @ts-ignore
    // const modifiedReq = req.clone({headers: new HttpHeaders().set('X-Authorization', user.accessToken)})
    //    return next.handle(modifiedReq);
    // }))

  //   return this.authService.user.pipe(take(1), exhaustMap((user: UserModel) => {
  //     if (!user){
  //       return next.handle(req);
  //     }
  //
  //     const modifiedReq = req.clone({headers: new HttpHeaders().set('X-Authorization', user.accessToken)})
  //     return next.handle(modifiedReq);
  //
  //   let sth:string ='';
  //   const user:UserModel;
  //   if (localStorage.getItem('userData')!==null){
  //     sth = localStorage.getItem('userData');
  //     user = JSON.parse(localStorage.getItem('userData'));
  //
  //   }
  //   if (user){
  //     if (user._token){
  //       const modifiedReq = req.clone({headers: new HttpHeaders().set('X-Authorization', user._token)})
  //          return next.handle(modifiedReq);
  //       }
  //     }
  //   else {
  //     return next.handle(req);
  //   }
  }
}
