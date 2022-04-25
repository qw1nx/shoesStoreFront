export class UserModel {
  constructor(
    public email: string,
    public id: string,
    public isAdmin: boolean,
    public _token: string){
  }
}
