import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'Las Bolas Del Dragon',
      descripcion: 'Esferas de cristal de las Bolas del Dragon.',
      precio: 30.000,
      imagen: '/1.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'SH Figuarts - Goku ULtra Intinto',
      descripcion: 'Figura articula de Goku Ultra intinto version anime.',
      precio: 200.500,
      imagen: '/2.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 3,
      nombre: 'Tomo 20 - Dragon ball Super',
      descripcion: 'Manga original escrito por Akira Toriyama.',
      precio: 6500,
      imagen: '/man.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 4,
      nombre: 'Blu Rey - Dragon ball Classic',
      descripcion: 'Blu Rey coleccionista del comienzo de la aventura de Goku.',
      precio: 50.000,
      imagen: '/4.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 5,
      nombre: 'aritos Potara - Dragon ball Super',
      descripcion: 'Aritos de plata.',
      precio: 4.000,
      imagen: '/55.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 6,
      nombre: 'Dragon ball z Kakarot Ps4',
      descripcion: 'Dragon Ball Z: Kakarot es un videojuego de rol de acción, desarrollado por CyberConnect2 y publicado por Bandai Namco Entertainment.',
      precio: 69.999,
      imagen: '/6.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 7,
      nombre: 'buzo - dragon ball',
      descripcion: 'Algodon ("Oficial").',
      precio: 30.000,
      imagen: '/ropa.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 8,
      nombre: 'Dragon ball super Card Game',
      descripcion: 'he basic set consists of 134 different cards. 8 out of the total 134 cards are starter only cards',
      precio: 90.000,
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
