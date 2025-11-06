import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClasseCatogotia_e, CorCategoria_e } from '../../enums/Enum';

@Component({
  selector: 'app-selecao-categorias',
  imports: [],
  templateUrl: './selecao-categorias.html',
  styleUrl: './selecao-categorias.scss'
})
export class SelecaoCategorias {
  categorias: string=""
  corCategoria: string=""
  classeCategoria: string=""
 constructor(private activateRoute: ActivatedRoute) {
  this.activateRoute.params.subscribe((params) => {
    this.categorias=params['categorias']
    this.corCategoria=CorCategoria_e[this.categorias as keyof typeof CorCategoria_e]
    console.log(this.corCategoria)
    this.classeCategoria=ClasseCatogotia_e[this.categorias as keyof typeof ClasseCatogotia_e]
    
  })
 }
}

