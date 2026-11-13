import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal } from '../../models/animal';

@Component({
  selector: 'app-producto-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.css'
})
export class ProductoCard {
  @Input() animal!: Animal;
  @Output() verDetalle = new EventEmitter<Animal>(); // Emite el animal completo

  onVerDetalle(): void {
    this.verDetalle.emit(this.animal);
  }
}