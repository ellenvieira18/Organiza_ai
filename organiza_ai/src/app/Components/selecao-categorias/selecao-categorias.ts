import { ChangeDetectionStrategy, Component, model, inject, signal} from '@angular/core';
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


export interface DialogData {
  selectedDate: Date;
}

@Component({
  selector: 'app-selecao-categorias',
  standalone: true,
  providers: [provideNativeDateAdapter(), provideNativeDateAdapter()],
  imports: [MatDatepickerModule, MatTimepickerModule, MatCardModule, MatFormFieldModule, MatInputModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './selecao-categorias.html', 
  styleUrl: './selecao-categorias.scss'
})
export class SelecaoCategorias {
  value: Date | null = null;

  categorias: string=""
  corCategoria: string=""
  classeCategoria: string=""

  selected = model<Date | null>(null);
 constructor(private activateRoute: ActivatedRoute)
 
 {
  this.activateRoute.params.subscribe((params) => {
    this.categorias=params['categorias']
    this.corCategoria=CorCategoria_e[this.categorias as keyof typeof CorCategoria_e]
    console.log(this.corCategoria)
    this.classeCategoria=ClasseCatogotia_e[this.categorias as keyof typeof ClasseCatogotia_e]
    
  })

 }

dialog = inject(MatDialog);

  selectedDate = model<Date | null>(null);

  openDialog() {
    
    const dialogRef = this.dialog.open(HorarioDialog, {
      data: {selectedDate: this.selectedDate()},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.selectedDate.set(result);
    });
  }
}

