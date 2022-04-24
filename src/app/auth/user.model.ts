export class UserModel {
  constructor(
    public email: string,
    public id: string,
    private isAdmin: boolean,
    private _token: string){
  }

  get token(){
    return this._token
  }

  get admin(){
    return this.isAdmin
  }

}
