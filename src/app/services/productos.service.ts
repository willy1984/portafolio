import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  obtenerProductos() {
    return this.http.get('https://mispruebas-169f4.firebaseio.com/productos_idx.json');
  }

  getProducto(id: string) {
    return this.http.get(`https://mispruebas-169f4.firebaseio.com/productos/${id}.json`);
  }
}
