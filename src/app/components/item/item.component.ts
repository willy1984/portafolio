import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  idProducto: string;
  producto: ProductoDescripcion;

  constructor(private route: ActivatedRoute,
              private productosService: ProductosService) { }

  ngOnInit() {

    this.route.params.subscribe(parametros => {
      this.idProducto = parametros.id;
    });

    this.obtenerProducto();
  }

  obtenerProducto() {
    this.productosService.getProducto(this.idProducto).subscribe((respuestaProducto: ProductoDescripcion) => {
      this.producto = respuestaProducto;
    });
  }

}
