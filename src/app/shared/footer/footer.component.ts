import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { InfoPagina } from 'src/app/interfaces/info-pagina.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio = new Date().getFullYear();
  infoPagina: InfoPagina;

  constructor(private infoPaginaService: InfoPaginaService) { }

  ngOnInit() {
    setTimeout(() => {
      this.infoPagina = this.infoPaginaService.info;
      console.log('object', this.infoPagina);
    });
  }

}
