import { Injectable } from '@angular/core'; // Asegúrate de que esta línea está al principio de tu archivo
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://fakestoreapi.com/users';

  constructor(private http: HttpClient) {}

  validateUser(username: string, password: string): Observable<boolean> {
    return this.http
      .get<User[]>(this.apiUrl)
      .pipe(
        map((users) =>
          users.some(
            (user) => user.username === username && user.password === password
          )
        )
      );
  }

  // Añade los métodos que faltan aquí
  registerUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }

  getUserDetails(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }
}