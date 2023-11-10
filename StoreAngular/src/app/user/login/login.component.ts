import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private userService: UserService) { }

  login(username: string, password: string): void {
    this.userService.login(username, password).subscribe(
      (response: any) => {
        const jwtToken = response.token;

        if (jwtToken) {
          localStorage.setItem('jwtToken', jwtToken);
        }
      },
      (error) => {
      //no muestra mensaje de error
      }
    );
  }
}