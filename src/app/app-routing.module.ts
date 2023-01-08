import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { CardapioComponent } from './views/cardapio/cardapio.component';
import { HomeComponent } from './views/home/home.component';
import { MonteComponent } from './views/monte/monte.component';
import { PedidoComponent } from './views/pedido/pedido.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'cardapio',
    component: CardapioComponent
  },
  {
    path:'monte',
    component: MonteComponent
  },
  {
    path:'cadastro',
    component: CadastroComponent
  },
  {
    path:'pedidos',
    component: PedidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
