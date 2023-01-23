import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/users';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor( private userService: UserServiceService) { }

  // Crear objeto que se enviará al api
  datos: Users = {
    id: '',
    name: '',
    username: ''
  };

  onSubmit() {
    this.userService.postUser(this.datos).subscribe(
      (usuario: Users) => console.log(usuario));
  }

  ngOnInit(): void {
  }

}
