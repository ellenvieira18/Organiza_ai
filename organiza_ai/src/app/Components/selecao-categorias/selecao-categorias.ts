// import { Component, Input } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { ClasseCatogotia_e, CorCategoria_e } from '../../enums/Enum';

// @Component({
//   selector: 'app-selecao-categorias',
//   imports: [],
//   templateUrl: './selecao-categorias.html',
//   styleUrl: './selecao-categorias.scss'
// })
// export class SelecaoCategorias {
//   categorias: string=""
//   corCategoria: string=""
//   classeCategoria: string=""
//  constructor(private activateRoute: ActivatedRoute) {
//   this.activateRoute.params.subscribe((params) => {
//     this.categorias=params['categorias']
//     this.corCategoria=CorCategoria_e[this.categorias as keyof typeof CorCategoria_e]
//     console.log(this.corCategoria)
//     this.classeCategoria=ClasseCatogotia_e[this.categorias as keyof typeof ClasseCatogotia_e]
    
//   })
//  }
// }

import { Component, Input, model} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClasseCatogotia_e, CorCategoria_e } from '../../enums/Enum';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-selecao-categorias', 
  providers: [provideNativeDateAdapter()],
  imports: [MatDatepickerModule, MatCardModule],
  templateUrl: './selecao-categorias.html',
  styleUrl: './selecao-categorias.scss'
})
export class SelecaoCategorias {
  categorias: string=""
  corCategoria: string=""
  classeCategoria: string=""

  selected = model<Date | null>(null);
 constructor(private activateRoute: ActivatedRoute) {
  this.activateRoute.params.subscribe((params) => {
    this.categorias=params['categorias']
    this.corCategoria=CorCategoria_e[this.categorias as keyof typeof CorCategoria_e]
    console.log(this.corCategoria)
    this.classeCategoria=ClasseCatogotia_e[this.categorias as keyof typeof ClasseCatogotia_e]
    
  })
 }
}
