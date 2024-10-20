import { Component } from '@angular/core';
import { AulaService } from '../shared/services/aula.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isHome: boolean=false;

  constructor(
    public aulaService: AulaService,
    private router: Router
  ) {this.isHome = this.router.url === '/home';}


}
