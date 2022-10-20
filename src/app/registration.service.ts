import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './model/employee';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private _url: string="http://localhost:3000/employees";
 // private _url: string="../assets/data/employees.json";s

  constructor(private _http: HttpClient) { }
  register(userData: any){
    return this._http.post<any>(this._url, userData);
  }

  getUser(id:string):Observable<IEmployee>{
    return this._http.get<IEmployee>(`http://localhost:3000/employees/${id}`);
  }

  getAllUser():Observable<IEmployee[]>{
    return this._http.get<IEmployee[]>("http://localhost:3000/employees");
  }

  deleteUser(id:string){
    return this._http.delete(`http://localhost:3000/employees/${id}`);
  }

  updateUser(id:string, employee:IEmployee){
    return this._http.put(`http://localhost:3000/employees/${id}`,employee);
  }

}
