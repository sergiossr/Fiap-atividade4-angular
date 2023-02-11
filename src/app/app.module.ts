import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { CardapioComponent } from './views/cardapio/cardapio.component';
import { MonteComponent } from './views/monte/monte.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { PedidoComponent } from './views/pedido/pedido.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CardapioComponent,
    MonteComponent,
    CadastroComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},  
      {path:'cardapio', component: CardapioComponent},
      {path:'monte',component: MonteComponent },
      {path:'cadastro',component: CadastroComponent},
      {path:'pedidos',component: PedidoComponent }
    ]),
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
