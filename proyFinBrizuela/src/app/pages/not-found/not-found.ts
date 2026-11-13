import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // <--- Importamos esto

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink], // <--- Lo sumamos a los imports
  templateUrl: './not-found.html',
  styleUrl: './not-found.css'
})
export class NotFound {}