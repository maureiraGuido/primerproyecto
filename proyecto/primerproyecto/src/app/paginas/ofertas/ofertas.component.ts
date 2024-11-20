import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'Las Bolas Del Dragon',
      descripcion: '20% de descuento.',
      precio: 24000,
      imagen: '/1.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'SH Figuarts - Goku ULtra Intinto',
      descripcion: '50% de Descuento.',
      precio:  100250,
      imagen: '/2.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 4,
      nombre: 'Blu Rey - Dragon ball Classic',
      descripcion: '30% de descuento.',
      precio: 35000,
      imagen: '/4.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 6,
      nombre: 'Dragon ball z Kakarot Ps4',
      descripcion: '20% de descuento',
      precio: 56000,
      imagen: '/6.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 7,
      nombre: 'buzo - dragon ball',
      descripcion: '15% de descuento.',
      precio: 25500,
      imagen: '/ropa.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 8,
      nombre: 'Dragon ball super Card Game',
      descripcion: '30% de descuento',
      precio: 63.000,
      imagen: '/card.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
  ];
  constructor(private carritoService: CarritoService) {}

  // Método para agregar un producto al carrito
  agregar(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito'); // Muestra el mensaje

  }

}
