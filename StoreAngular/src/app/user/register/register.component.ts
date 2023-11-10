import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private userService: UserService) {}

  register(username: string, password: string): void {
    const userData = {
      username,
      password,
    };

    this.userService.registerUser(userData).subscribe(
      (response: any) => {
        console.log('Registro exitoso', response);
      },
      (error) => {
        console.error('Error en el registro', error);
      }
    );
  }
}

