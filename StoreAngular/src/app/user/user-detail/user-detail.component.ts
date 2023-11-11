import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  userDetails: any;
  userId: number = 0;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // ID del usuario de la URL
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tipo explícito
      const userIdParam = params.get('Id');
      if (userIdParam !== null) {
        this.userId = +userIdParam; // Convierte a número si userIdParam no es nulo

        //detalles del usuario
        this.userService.getUserDetails(this.userId.toString()).subscribe(
          (data: any) => {
            this.userDetails = data;
          },
          (error: any) => {
            console.error('Error obteniendo los detalles del usuario', error);
          }
        );
      }
    });
  }
}