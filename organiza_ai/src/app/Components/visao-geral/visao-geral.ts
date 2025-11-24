import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-visao-geral',
  providers: [provideNativeDateAdapter()],
  imports: [MatDatepickerModule, MatCardModule],
  templateUrl: './visao-geral.html',
  styleUrl: './visao-geral.scss'
})
export class VisaoGeral {
  selected: Date | null = null; 
  constructor(private router: Router) {}
}
