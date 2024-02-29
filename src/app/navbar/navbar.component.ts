import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/interfaces/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements  OnInit {
  lista_clientes : Cliente[]= [];
  constructor(private router: Router) { }
  ngOnInit():void {
    this.getMarcas();
    
  }
  getMarcas() {
    this.lista_clientes = [
      {
        id: '1',
        nombre: 'Kualitas',
        direccion: 'Calle 1',
        telefono: '1234567890',
        email: 'algo@algo.com',
        contacto: 'Juan Perez',
        fecha_registro: '2021-01-01',
        fecha_modificacion: '2021-01-01',
        estatus: 'Activo',
        observaciones: 'Cliente nuevo'
      },
      {
        id: '2',
        nombre: 'Kachamosas',
        direccion: 'Calle 2',
        telefono: '1234567890',
        email: '@algo.com',
        contacto: 'Maria Perez',
        fecha_registro: '2021-01-01',
        fecha_modificacion: '2021-01-01',
        estatus: 'Activo',
        observaciones: 'Cliente nuevo'
      },
      {
        id: '3',
        nombre: 'Puerto Azul',
        direccion: 'Calle 3',
        telefono: '1234567890',
        email: '@algo.com',
        contacto: 'Pedro Perez',
        fecha_registro: '2021-01-01',
        fecha_modificacion: '2021-01-01',
        estatus: 'Activo',
        observaciones: 'Cliente nuevo'
      }
    ];
  }
  selectCliente(cliente: String) {
    this.router.navigate(['/inicio', cliente]);
  }
}
