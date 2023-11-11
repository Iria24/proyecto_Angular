import { Component } from '@angular/core';
import { UserService } from '../user.service';

type User = {
  email: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  phone: string;
  adress: string;
  city: string;
  number: string;
  zipcode: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent {
  constructor(private userService: UserService) {}

  register(user: User): void {
    this.userService.registerUser(user).subscribe(
      (data: any) => {
        console.log('Registrado correctamente', data);
      },
      (error: any) => {
        console.error('Error en el registro', error);
      }
    );
  }
}