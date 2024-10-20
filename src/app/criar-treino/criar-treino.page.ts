import { Component, OnInit, ViewChild } from '@angular/core';
import { AulaService } from '../shared/services/aula.service';
import { IonModal } from '@ionic/angular';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-criar-treino',
  templateUrl: './criar-treino.page.html',
  styleUrls: ['./criar-treino.page.scss'],
})
export class CriarTreinoPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;

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
    public aulaService:AulaService,
    private modalController: ModalController
  ) { }

  async onWillDismiss(event: any) {
    console.log('Modal will dismiss', event);
  }

 async cancel() {
   await this.dismissModal();
    console.log('Cancel button clicked');
  }

  async confirm() {
    await this.dismissModal();
    console.log('Confirm button clicked');
  }

  async dismissModal() {
    await this.modalController.dismiss();
  }


  ngOnInit() {
  }



  salvar(){
    this.aulaService.aulas.push(this.professor)
    console.log(this.aulaService.aulas)
  }
}
