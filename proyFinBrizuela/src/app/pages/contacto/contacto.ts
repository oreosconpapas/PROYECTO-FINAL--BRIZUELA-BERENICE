import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {
  // Variable para simular el envío del formulario
  mensajeEnviado: boolean = false;

  enviarFormulario(event: Event): void {
    event.preventDefault(); // Evita que la página se recargue por defecto
    this.mensajeEnviado = true;
    
    // Opcional: Ocultar el mensaje de éxito después de unos segundos
    setTimeout(() => {
      this.mensajeEnviado = false;
    }, 4000);
  }
}