import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private _authenticate: AuthenticateService,
  ) { }

  registrar(dados: any){
    this._authenticate.register(dados.email, dados.password);
  }

  realizarLogin(dados: any){
    this._authenticate.login(dados.email, dados.password);
  }

  entrarComGoogle(){
    this._authenticate.signInWithGoogle();
  }

}
