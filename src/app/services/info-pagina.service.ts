import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  url: string;
  // headers: HttpHeaders;

  // constructor(private http: HttpClient) {
  //   this.url = "https://pokeapi.co/api/v2";
  //   this.headers = new HttpHeaders({
  //     "content-type": "application/json"
  //   });
  // }

  constructor(private http: HttpClient) {

    this.url = 'https://mispruebas-169f4.firebaseio.com/equipo.json';
    this.cargarInfo();
  }

  cargarInfo() {
    this.http.get('assets/data/data-pagina.json').subscribe((resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
    });
  }

  cargarEquipo() {
    return this.http.get(`${this.url}`);
  }

}
