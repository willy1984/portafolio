import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  terminoUrl: string;
  productos: Producto[] = [];
  productoFiltrado: Producto[] = [];

  constructor(private route: ActivatedRoute,
              private productoService: ProductosService) { }

  ngOnInit() {
    this.buscarProducto();

    this.route.params.subscribe(params => {
      this.terminoUrl =  params.termino;
    });
  }

  buscarProducto() {
    this.productoService.obtenerProductos().subscribe((respuestaProducto: Producto[]) => {
      this.productos = respuestaProducto;
      this.filtrarProducto(this.terminoUrl);
    });
  }

  filtrarProducto(termino: string) {

    termino = termino.toLocaleLowerCase();

    this.productos.forEach(prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
        this.productoFiltrado.push(prod);
      }
    });
  }

}
