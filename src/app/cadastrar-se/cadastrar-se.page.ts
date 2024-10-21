import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NavigationService } from '../shared/navigation/navigation.service';


@Component({
  selector: 'app-cadastrar-se',
  templateUrl: './cadastrar-se.page.html',
  styleUrls: ['./cadastrar-se.page.scss'],
})
export class CadastrarSePage implements OnInit {

  constructor(private router: Router,private toastController: ToastController,private navigationService: NavigationService) { }


   async onSubmit() {
    // Aqui você pode adicionar a lógica para enviar os dados para um serviço ou API
    console.log('Formulário enviado com sucesso!');
    
    const toast = await this.toastController.create({
      message: 'Cadastrado com sucesso!',
      duration: 2000,
      position: 'middle'
    });
     
    await toast.present();

    
    // Exemplo de redirecionamento após o cadastro
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
