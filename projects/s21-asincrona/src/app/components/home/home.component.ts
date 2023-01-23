import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  thead = ['id', 'nombre', 'usuario'];

  // Crear instancia de UserServices
  constructor( private userService: UserServiceService ) { }

  // Ejecutar el método getAll del servicio al cargar el componente

  usersArray = new Array(); // Dentro del array irá la data de la API

  ngOnInit() {
    // Ejecutar el método getAllInterceptor
    this.userService.getAllInterceptor().subscribe({
      // next dice que hacer cuando se ejecutar el método
      next: (response: any) => { this.usersArray = response.body; console.log(response) },
      // error y complete no son necesarios
      error: (e) => console.error(e),
      complete: () => console.info('La API funcionó con éxito')
    })
  }

}
