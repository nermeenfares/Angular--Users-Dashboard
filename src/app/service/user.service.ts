import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UserResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
   onLogin(obj:any){
    debugger;
    return this.http.post("https://reqres.in/api/login", obj);
  }
  getUsers(page:number):Observable<UserResponse>{
    console.log(Response)
return this.http.get<UserResponse>(`https://reqres.in/api/users?page=${page}`);
  }
}
