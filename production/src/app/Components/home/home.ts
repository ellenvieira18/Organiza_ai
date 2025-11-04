import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  constructor(private router: Router) {}

  goTo(page: string, categorias: string='') {
    switch (page) {
      case 'categorias':
        this.router.navigate(['/categorias', categorias]);
        break;
      case 'visao-geral':
        this.router.navigate(['/visao-geral']);
        break;
    }
  }

}
