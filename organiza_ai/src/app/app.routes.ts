import { Routes } from '@angular/router';
import { Login } from '../app/Components/login/login';
import { Cadastro } from '../app/Components/cadastro/cadastro';
import { Home } from '../app/Components/home/home';
import { SelecaoCategorias } from './Components/selecao-categorias/selecao-categorias';
import { VisaoGeral } from './Components/visao-geral/visao-geral';

export const routes: Routes = [
    { path: '', component: Login },
    { path: 'cadastro', component: Cadastro },
    { path: 'home', component: Home }, 
    { path: 'categorias/:categorias', component: SelecaoCategorias},
    { path: 'visao-geral', component: VisaoGeral}
];

// add rotas

