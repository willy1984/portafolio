import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  cargando = true;
  productos: Producto[] = [];

  constructor(private productosService: ProductosService) {
    this.obtenerProductos();
  }

  ngOnInit() {
  }

  obtenerProductos() {
    this.productosService.obtenerProductos().subscribe((respuestaProductos: Producto[]) => {
      this.productos = respuestaProductos;
      this.cargando = false;
    });
  }

}
