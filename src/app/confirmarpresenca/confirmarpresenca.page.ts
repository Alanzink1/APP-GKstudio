import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { AulaService } from '../shared/services/aula.service';

@Component({
  selector: 'app-confirmarpresenca',
  templateUrl: './confirmarpresenca.page.html',
  styleUrls: ['./confirmarpresenca.page.scss'],
})
export class ConfirmarpresencaPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;

  convidados:any=[]

name:any;
  constructor( 
    public aulaService:AulaService
  ) {  }

convidar(aula:any){
  this.convidados.push(aula)
  console.log(this.convidados);

}






  ngOnInit() {
  }


cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    // const ev = event as CustomEvent<OverlayEventDetail<string>>;
    // if (ev.detail.role === 'confirm') {
    //   this.message = `Hello, ${ev.detail.data}!`;
    // }
  }
}
