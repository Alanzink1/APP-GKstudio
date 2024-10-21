import { Component } from '@angular/core';
import { AulaService } from '../shared/services/aula.service';
import { Router } from '@angular/router';


interface Atividade {
  titulo: string;
  participantes: number;
}

interface DataAtividade {
  data: Date;
  atividades: Atividade[];
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  atividades: DataAtividade[] = [
    {
      data: new Date('2024-10-07'),
      atividades: [
        { titulo: 'FUNCIONAL', participantes: 16 },
        { titulo: 'KICKBOXING', participantes: 12 },
      ],
    },
    {
      data: new Date('2024-10-14'),
      atividades: [
        { titulo: 'BOXE', participantes: 10 },
        { titulo: 'YOGA', participantes: 8 },
      ],
    },
    {
      data: new Date('2024-10-21'),
      atividades: [
        { titulo: 'CROSSFIT', participantes: 15 },
      ],
    },
  ];

  isHome: boolean=false;

  constructor(
    public aulaService: AulaService,
    private router: Router
  ) {this.isHome = this.router.url === '/home';}


}
