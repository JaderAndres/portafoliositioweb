/**
 * Component for displaying detailed information about a project.
 * 
 * This component retrieves project details based on an ID parameter from the URL
 * and displays them using the DetalleProyectoService. It also provides navigation
 * functionality to return to the home page.
 * 
 * @component
 * @selector app-detalle-proyecto
 * @standalone true
 * 
 * @example
 * // Route configuration
 * { path: 'proyecto/:id', component: DetalleProyecto }
 */
import { Component, inject, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DetalleProyectoService } from '../services/detalleproyecto';
import { DetalleProyecto as DetalleProyectoModel } from '../models/detalleproyecto';

@Component({
  selector: 'app-detalle-proyecto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-proyecto.html',
  styleUrl: './detalle-proyecto.css',
})
export class DetalleProyecto implements OnInit {
  proyectoId: string | null = null;
  detalleProyecto: DetalleProyectoModel | null = null;

  private detalleProyectoService = inject(DetalleProyectoService); //Inyectar el servicio de detalle proyecto

  constructor(private route: ActivatedRoute,
              private router: Router
  ) {}

  ngOnInit(): void {
    // Obtener el parámetro 'id' de la URL
    this.proyectoId = this.route.snapshot.paramMap.get('id');

    if (this.proyectoId) {

      // Llama al servicio para obtener los detalles del proyecto usando el ID
      const detalle = this.detalleProyectoService.obtenerDetalleProyecto(this.proyectoId);

      // Asigna a detalleProyecto para mostrar el detalle en la plantilla
      this.detalleProyecto = detalle || null;



      //Prueba
      // console.log(this.detalleProyecto);
    }

  }

  volver() {
    this.router.navigate(['/'])
  }
}
