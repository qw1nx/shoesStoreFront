import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {BehaviorSubject, catchError, tap, throwError} from "rxjs";
import {UserModel} from "./user.model";

export interface AuthResponseData {
  email: string,
  _id: string,
  isAdmin: boolean,
  accessToken: string
}

@Injectable()
export class AuthService{
  private url: string = 'http://localhost:3030/users';
  // @ts-ignore
  user = new BehaviorSubject<UserModel>(null);

  constructor( private http: HttpClient, private router: Router) {
  }


  signup(email: string, password: string){
    return this.http.post<AuthResponseData>(this.url + '/register',
      {
        email: email,
        password: password
      }).pipe(catchError(this.handleError),
      tap((resData: AuthResponseData) => {
        this.handleAuthentication(resData.email, resData._id, resData.accessToken, resData.isAdmin = !!'false')
      }));
  }

  login(email: string, password: string){
    return this.http.post<AuthResponseData>(this.url + '/login',
      {
        email: email,
        password: password
      }).pipe(catchError(this.handleError), tap((resData: AuthResponseData) => {
      this.handleAuthentication(resData.email, resData._id, resData.accessToken, resData.isAdmin = !!'false')
    }));
  }

  logout(){
    //this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('user');
  }

  private handleAuthentication(email: string, userId: string, token: string, isAdmin: boolean){
    const user = new UserModel(email, userId, isAdmin, token)
    this.user.next(user);
    localStorage.setItem('user', JSON.stringify(user))
  }

  private handleError(errorRes: HttpErrorResponse){
    //console.log(errorRes);
    let errorMessage = errorRes.message;
    return throwError(errorMessage);
  }

}
