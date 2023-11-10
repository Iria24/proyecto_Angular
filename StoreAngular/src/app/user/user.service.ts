import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://fakestoreapi.com/users'; //URL base de la API

  constructor(private http: HttpClient) { }

  //  obtiene detalles de un usuario por ID
  getUserDetails(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${userId}`);
  }

  // registrar un nuevo usuario
  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  //corroborar y obtener un token JWT
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }
}





// export class AuthService {
//   private apiUrl = 'https://fakestoreapi.com/auth';  

//   constructor(private http: HttpClient) {}

//   login(username: string, password: string): Observable<string> {
//     const credentials = { username: username, password: password };
//     return this.http.post<string>(`${this.apiUrl}/login`, credentials);
//   }

//   register(username: string, password: string): Observable<string> {
//     const newUser = { username: username, password: password };
//     return this.http.post<string>(`${this.apiUrl}/register`, newUser);
//   }
// }