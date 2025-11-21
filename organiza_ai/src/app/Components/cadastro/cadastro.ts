import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss'
})
export class Cadastro {

  nome: string = '';
  email: string = '';
  senha: string = '';

  // navegação
  constructor(private router: Router) {}
  abrirLogin(){
    console.log("Nome:", this.nome);
    console.log("Email:", this.email);
    console.log("Senha:", this.senha);

    this.router.navigate(['/login']);
  }
  possuiConta(){
    this.router.navigate(['/login']);
  }
}
