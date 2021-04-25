import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = 'https://localhost:5001/api/'

  constructor(private http: HttpClient) { }

  getUsers() { return this.http.get<User[]>(this.baseUrl + 'Users'); }
}
