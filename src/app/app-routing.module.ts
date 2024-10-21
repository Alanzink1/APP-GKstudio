import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'criar-treino',
    loadChildren: () => import('./criar-treino/criar-treino.module').then( m => m.CriarTreinoPageModule)
  },
  {
    path: 'confirmarpresenca',
    loadChildren: () => import('./confirmarpresenca/confirmarpresenca.module').then( m => m.ConfirmarpresencaPageModule)
  },
  {
    path: 'cancelar',
    loadChildren: () => import('./cancelar/cancelar.module').then( m => m.CancelarPageModule)
  },  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'cadastrar-se',
    loadChildren: () => import('./cadastrar-se/cadastrar-se.module').then( m => m.CadastrarSePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
