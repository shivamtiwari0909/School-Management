import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public http:HttpClient) { }

  baseUrl="https://localhost:44335/api/";

  loginUser(user:Array<string>){
    return this.http.post(this.baseUrl+"User/LoginUser",{
      Email:user[0],
      Password:user[1]
    },{responseType:"text"})
  }

}
