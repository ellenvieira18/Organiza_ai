import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  email: string = '';
  senha: string = '';

  constructor(private router: Router) {}

  abrirHome() {
    console.log("Email:", this.email);
    console.log("Senha:", this.senha);

    // Aqui você pode validar login futuramente
    this.router.navigate(['/home']);
  }

  abrirCadastro() {
    this.router.navigate(['/cadastro']);
  }
}
