import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MessageService } from './message.service';
import { HomePage } from '../home/home.page';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  duration: number = 2000;
  message: string = 'Erro inesperado';
  isLoading = false;

  constructor(
    private auth: Auth,
    private _message: MessageService,
    private fireauth: AngularFireAuth,
    private _router: Router
  ) {}

  public async register(email: string, password: string): Promise<boolean> {
    this.isLoading = true;
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        this._message.show('Conta criada com sucesso! Realize o Login!!!');
        this.redirectTo('/login');
        return true;
      })
      .catch((error: any) => {
        this.showErro(error, email, password);
        return false;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  public async login(email: string, password: string): Promise<boolean> {
    this.isLoading = true;
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((response: any) => {
        console.log(response.user);
        this._message.show('Login Realizado com Sucesso!');
        this.redirectTo('/home');
        return true;
      })
      .catch((error: any) => {
        this.showErro(error, email, password);
        return false;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  redirectTo(page: string) {
    this._router.navigate([page]);
  }

  signInWithGoogle() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then( res => {
      this._router.navigate(['/home']);
      localStorage.setItem('token', JSON.stringify(res.user?.uid));
    }, err => {
      alert(err.message);
    })
  }

  showErro(error: any, email: string, password: string) {
    if (error.code === 'auth/too-many-requests') this.message = 'Você realizou muitas tentativas de login. Tente novamente mais tarde.';
    if (error.code === 'auth/user-not-found') this.message = 'Usuário não encontrado.';
    if (error.code === 'auth/wrong-password') this.message = 'Senha incorreta.';
    if (error.code === 'auth/weak-password') this.message = 'A senha deve conter no mínimo 6 caracteres.';
    if (error.code === 'auth/email-already-in-use') this.message = 'Este e-mail já está em uso.';
    if (error.code === 'auth/missing-email') this.message = 'E-mail não informado.';
    if (!email) this.message = 'Preencha o e-mail.';
    if (!password) this.message = 'Preencha a senha com 6 caracteres.';
    this._message.show(this.message, this.duration);
  }
}
