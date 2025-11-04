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

  goTo(page: string) {
    switch (page) {
      case 'trabalho':
        this.router.navigate(['/trabalho']);
        break;
      case 'estudos':
        this.router.navigate(['/estudos']);
        break;
      case 'pessoal':
        this.router.navigate(['/pessoal']);
        break;
      case 'visao-geral':
        this.router.navigate(['/visao-geral']);
        break;
    }
  }

}
