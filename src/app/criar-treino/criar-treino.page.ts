import { Component, OnInit } from '@angular/core';
import { AulaService } from '../shared/services/aula.service';

@Component({
  selector: 'app-criar-treino',
  templateUrl: './criar-treino.page.html',
  styleUrls: ['./criar-treino.page.scss'],
})
export class CriarTreinoPage implements OnInit {

  professor={ 
    id: null, 
    nome: null, 
    hora_inicio: null, 
    hora_fim: null, 
    data: null, 
    professor: null, 
    sala: null, 
    qtd: null,
    aluno: [
    ] 
  }

  constructor(
    public aulaService:AulaService
  ) { }

  ngOnInit() {
  }

  salvar(){
    this.aulaService.aulas.push(this.professor)
    console.log(this.aulaService.aulas)
  }
}
