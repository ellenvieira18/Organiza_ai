import { Component, inject, model } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatTimepickerModule} from '@angular/material/timepicker';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-horario-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    ReactiveFormsModule, MatTimepickerModule],
    providers: [
    provideNativeDateAdapter(),
    {provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS},
  ],
  templateUrl: './horario-dialog.html',
  styleUrl: './horario-dialog.scss'
})
export class HorarioDialog {
  value: Date | null = null;

  dialogRef = inject(MatDialogRef<HorarioDialog>);
  data = inject(MAT_DIALOG_DATA);

  readonly date = new FormControl(new Date());
  readonly text = model('');
  readonly time = new FormControl(new Date())
  // time: any;

  constructor() {
    this.date.setValue(this.data.selectedDate);
    this.text.set(this.data.selectedText);
  }

  closeDialog() {
    this.dialogRef.close({
      date: this.date.value,
      text: this.text(),
      time: this.time.value
    });
  }
}
