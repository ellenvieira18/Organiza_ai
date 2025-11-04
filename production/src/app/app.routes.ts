import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Cadastro } from './cadastro/cadastro';
import { Home } from './home/home';

export const routes: Routes = [
    { path: '', component: Login },
    { path: '', component: Cadastro },
    { path: '', component: Home }
];

// add rotas

