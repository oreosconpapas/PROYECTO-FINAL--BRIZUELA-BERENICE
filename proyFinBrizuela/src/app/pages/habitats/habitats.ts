import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Definimos la interfaz aquí mismo para no complicarnos con archivos extras
export interface Habitat {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  animalesTipicos: string[];
}

@Component({
  selector: 'app-habitats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habitats.html',
  styleUrl: './habitats.css'
})
export class Habitats {

habitatsList: Habitat[] = [
  {
    id: 1,
    nombre: 'Selva tropical',
    descripcion: 'Ambiente cálido y húmedo, con lluvias abundantes y una gran variedad de plantas y animales.',
    imagen: 'img/selva-tropical.jpg',
    animalesTipicos: ['Yaguareté', 'Mono aullador', 'Tucán', 'Tapir']
  },
  {
    id: 2,
    nombre: 'Sabana',
    descripcion: 'Grandes extensiones de pastizales con árboles dispersos, donde viven numerosos herbívoros y depredadores.',
    imagen: 'img/sabana.jpg',
    animalesTipicos: ['León', 'Elefante', 'Jirafa', 'Cebra']
  },
  {
    id: 3,
    nombre: 'Océano',
    descripcion: 'Ambiente de agua salada que alberga una enorme diversidad de especies, desde pequeños peces hasta grandes mamíferos marinos.',
    imagen: 'img/oceano.jpg',
    animalesTipicos: ['Ballena', 'Delfín', 'Tiburón', 'Tortuga marina']
  },
  {
    id: 4,
    nombre: 'Desierto',
    descripcion: 'Ambiente con muy pocas lluvias y temperaturas que pueden ser extremas. Sus animales tienen adaptaciones para sobrevivir con poca agua.',
    imagen: 'img/desierto.jpg',
    animalesTipicos: ['Camello', 'Zorro del desierto', 'Lagarto', 'Escorpión']
  },
  {
    id: 5,
    nombre: 'Bosque',
    descripcion: 'Ecosistema con abundantes árboles y vegetación, que ofrece refugio y alimento a muchas especies.',
    imagen: 'img/bosque.jpg',
    animalesTipicos: ['Oso', 'Ciervo', 'Zorro', 'Búho']
  },
  {
    id: 6,
    nombre: 'Regiones polares',
    descripcion: 'Zonas de temperaturas muy bajas, con grandes extensiones de hielo y animales adaptados al frío.',
    imagen: 'img/regiones-polares.jpg',
    animalesTipicos: ['Pingüino', 'Foca', 'Oso polar', 'Zorro ártico']
  },
  {
    id: 7,
    nombre: 'Agua dulce',
    descripcion: 'Ambientes de ríos, lagos y lagunas donde viven especies adaptadas al agua con baja concentración de sal.',
    imagen: 'img/agua-dulce.jpg',
    animalesTipicos: ['Nutria', 'Rana', 'Dorado', 'Yacaré']
  },
  {
    id: 8,
    nombre: 'Montañas',
    descripcion: 'Ambientes de grandes alturas, con terrenos rocosos y condiciones climáticas que cambian según la altitud.',
    imagen: 'img/montanas.jpg',
    animalesTipicos: ['Cóndor', 'Puma', 'Llama', 'Cabra montés']
  }
];


  habitatSeleccionado: Habitat | null = null;

  seleccionarHabitat(habitat: Habitat): void {
    this.habitatSeleccionado = habitat;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  cerrarDetalle(): void {
    this.habitatSeleccionado = null;
  }
}
