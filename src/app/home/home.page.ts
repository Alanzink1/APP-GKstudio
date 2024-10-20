import { Component } from '@angular/core';
import { AulaService } from '../shared/services/aula.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public aulaService: AulaService
  ) {}


}
