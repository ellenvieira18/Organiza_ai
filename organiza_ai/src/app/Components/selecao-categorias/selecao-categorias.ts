import { ChangeDetectionStrategy, Component, model, inject, signal, NgModule} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClasseCatogotia_e, CorCategoria_e } from '../../enums/Enum';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTimepickerModule} from '@angular/material/timepicker';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
  MAT_DATE_FORMATS,
  MAT_NATIVE_DATE_FORMATS,
} from '@angular/material/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { HorarioDialog } from '../horario-dialog/horario-dialog';
import { NgFor } from '@angular/common';

import { ChangeDetectorRef } from '@angular/core';


export interface DialogData {
  selectedDate: Date;
}

@Component({
  selector: 'app-selecao-categorias',
  standalone: true,
  providers: [provideNativeDateAdapter(), provideNativeDateAdapter()],
  imports: [MatDatepickerModule, MatTimepickerModule, MatCardModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatDialogModule, NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './selecao-categorias.html', 
  styleUrl: './selecao-categorias.scss'
})
export class SelecaoCategorias {
  value: Date | null = null;
  // arrayDeTexto: string[] = [];
  categorias: string=""
  corCategoria: string=""
  classeCategoria: string=""
  listaTarefas: any[]=[]

  selected = model<Date | null>(null);
 constructor(private activateRoute: ActivatedRoute, private cdr: ChangeDetectorRef) {

  this.activateRoute.params.subscribe((params) => {
    this.categorias=params['categorias']
    this.corCategoria=CorCategoria_e[this.categorias as keyof typeof CorCategoria_e]
    console.log(this.corCategoria)
    this.classeCategoria=ClasseCatogotia_e[this.categorias as keyof typeof ClasseCatogotia_e]
    
  })

 }

dialog = inject(MatDialog);

  selectedDate = model<Date | null>(null);
  text = model(''); // <-- ADICIONE ISSO AQUI

  openDialog() {
    
    const dialogRef = this.dialog.open(HorarioDialog, {
    data: {selectedDate: this.selectedDate()},
            // selectedText: this.text(), }  // <-- ENVIA O TEXTO 

    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result) return;
      this.listaTarefas = [...this.listaTarefas, result];
      this.cdr.markForCheck();
      console.log('close dialog', result);
      // this.listaTarefas=[{result}]
      // this.listaTarefas.push(result);
      // console.log('lista tarefas', this.listaTarefas);
      // this.selectedDate.set(result.date);
      // this.text.set(result.text);
      // this.arrayDeTexto.push([...this.arrayDeTexto, this.text]); 
    });
  }
}

