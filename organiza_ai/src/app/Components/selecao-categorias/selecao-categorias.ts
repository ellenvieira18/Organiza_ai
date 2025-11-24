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
 constructor(private activateRoute: ActivatedRoute) {
  this.activateRoute.params.subscribe((params) => {
    this.categorias=params['categorias']
    this.corCategoria=CorCategoria_e[this.categorias as keyof typeof CorCategoria_e]
    console.log(this.corCategoria)
    this.classeCategoria=ClasseCatogotia_e[this.categorias as keyof typeof ClasseCatogotia_e]
    
  })
 }
}
export class TimepickerDatepickerIntegrationExample {
  value: Date | null = null;
  constructor() {}
}



// export interface DialogData {
//   animal: string;
//   name: string;
// }

// /**
//  * @title Dialog Overview
//  */
// @Component({
//   selector: 'dialog-overview-example',
//   templateUrl: './selecao-categorias.html',
//   imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class DialogOverviewExample {
//   readonly animal = signal('');
//   readonly name = model('');
//   readonly dialog = inject(MatDialog);

//   openDialog(): void {
//     const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
//       data: {name: this.name(), animal: this.animal()},
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       if (result !== undefined) {
//         this.animal.set(result);
//       }
//     });
//   }
// }

// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: './selecao-categorias.html',
//   imports: [
//     MatFormFieldModule,
//     MatInputModule,
//     FormsModule,
//     MatButtonModule,
//     MatDialogTitle,
//     MatDialogContent,
//     MatDialogActions,
//     MatDialogClose,
//   ],
// })
// export class DialogOverviewExampleDialog {
//   readonly dialogRef = inject(MatDialogRef<DialogOverviewExampleDialog>);
//   readonly data = inject<DialogData>(MAT_DIALOG_DATA);
//   readonly animal = model(this.data.animal);

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }


