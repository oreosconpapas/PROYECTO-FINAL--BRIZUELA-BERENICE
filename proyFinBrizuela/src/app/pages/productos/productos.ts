import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal } from '../../models/animal';
import { ProductoCard } from '../../components/producto-card/producto-card';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, ProductoCard],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {

  animales: Animal[] = [
    { id: 1, nombre: "Mamíferos", especie: "Mamífero", descripcion: "Tienen pelo y las hembras producen leche para sus crías.", imagen: "img/mamiferosT.jpg" },
    { id: 2, nombre: "Aves", especie: "Ave", descripcion: "Tienen plumas, alas y la mayoría puede volar.", imagen: "img/aves.jpg" },
    { id: 3, nombre: "Reptiles", especie: "Reptil", descripcion: "Su cuerpo está cubierto de escamas y suelen poner huevos.", imagen: "img/reptilesC.jpg" },
    { id: 4, nombre: "peces", especie: "Pez", descripcion:"Animales vertebrados acuáticos que respiran a través de branquias y tienen el cuerpo cubierto de escamas. Se desplazan mediante aletas y suelen tener sangre fría.", imagen: "img/pecesM.jpg" },
    { id: 5, nombre: "invertebrados", especie: "Invertebrado", descripcion: "Animales que carecen de columna vertebral y de un esqueleto interno articulado.", imagen: "img/invertebrado.jpg" },
    { id: 6, nombre: "Anfibios", especie: "Anfibio", descripcion: "Animales vertebrados de sangre fría que pueden vivir tanto en el agua como en la tierra. Tienen la piel desnuda y húmeda, y la mayoría pasa por una metamorfosis, respirando por branquias al nacer y por pulmones y la piel al crecer.", imagen: "img/anfibio.jpg" }
  ];

  // Variable para guardar el animal seleccionado
  animalSeleccionado: Animal | null = null;

  // Método que captura el evento del hijo
  seleccionarAnimal(animal: Animal): void {
    this.animalSeleccionado = animal;
    // Opcional: hace scroll suave hacia arriba para ver el detalle
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Método para cerrar el detalle
  cerrarDetalle(): void {
    this.animalSeleccionado = null;
  }
}