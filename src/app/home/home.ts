import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Proyecto } from '../models/proyecto';
import { ProyectoService } from '../services/proyecto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

proyectos: Proyecto[] = []; //Modelo de Proyecto

//Inyectar el servicio de proyecto
private proyectoService = inject(ProyectoService); //Opcion 2.

ngOnInit(): void {
  this.proyectos = this.proyectoService.obtenerListadoProyectos(); //Llamar al metodo del servicio
}

constructor(private router: Router) {}

irDetalleProyecto(proyectoId: string): void {
  // Lógica para navegar al detalle del proyecto (solo para proyectos PowerBI)
  this.router.navigate(['/detalle-proyecto', proyectoId]);
}

}
