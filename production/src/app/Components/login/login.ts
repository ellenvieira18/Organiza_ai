import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  // navegação
  constructor(private router: Router) {}
  abrirHome(){
    this.router.navigate(['/home'])
  }
}
