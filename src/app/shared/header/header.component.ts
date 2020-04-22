import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { InfoPagina } from 'src/app/interfaces/info-pagina.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  infoPagina: InfoPagina;

  constructor(private infoPaginaService: InfoPaginaService,
              private router: Router) {
  }

  ngOnInit() {
    setTimeout(() =>{
       this.infoPagina = this.infoPaginaService.info;
    });
  }

  buscarProducto(termino: string) {

    if (termino.length < 1) {
      return;
    }

    this.router.navigate(['/search', termino]);
  }

}
