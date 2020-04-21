import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  equipo: [] = [];

  constructor(private infoPaginaService: InfoPaginaService) { 
    this.obtenerInformacionEquipo();
  }

  ngOnInit() {
  }

  obtenerInformacionEquipo() {
    this.infoPaginaService.cargarEquipo().subscribe((respuestaEquipo: any) => {
      this.equipo = respuestaEquipo;
    });
  }

}
