import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClienteCadastroService } from 'src/app/services/cliente-cadastro.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  Cliente: any;
  ClienteID: any;
  clienteForm: any;
  redenrizarCliente = false;

  //Variaveis para pedido
  PizzaID: any[] = [1, 2];
  renderizarPedido = false;
  payload: any = [];
  NovasPizzas: any = [];
  pizzaCardapio:any;

  constructor(
    private clienteCadastroService: ClienteCadastroService,
    private pedidoService: PedidoService,
    private pizzaService: PizzaService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.Cliente=this.clienteCadastroService.receberCliente(this.Cliente)

    console.log('dentro de pedido', this.Cliente);

    this.clienteForm = this.formBuilder.group({
      name: this.Cliente.name,
      email: this.Cliente.email,
      celular: this.Cliente.celular,
      rua: this.Cliente.rua,
      numero: this.Cliente.numero,
      bairro: this.Cliente.bairro,
      cidade: this.Cliente.cidade,
    }),
      this.ClienteID = this.Cliente.id;

    this.redenrizarCliente = true;

    if(this.PizzaID.length>0){  
for (let i=0; i <= this.PizzaID.length; i++)
{
       this.pizzaService.getPizzaID(this.PizzaID[i]).subscribe(
        (data)=>{
      console.log("retorno do Service", data)
      this.pizzaCardapio = data;})
  }


      this.renderizarPedido = true;
      console.log(this.renderizarPedido)
    }
    }

 

  //criando o pedido manualmente
  enviarPedido() {

    this.payload = {
      "pizzasId": this.PizzaID,
      "novasPizzas": [
        {
          "nome": "",
          "ingredients": [""]
        }
      ],
      "clienteId": this.ClienteID
    };

    this.pedidoService.postPedido(this.payload).subscribe(
      succes => {
        alert('Cliente cadastrado')
        console.log('payload', this.payload)

      },
      error => {
        alert('Erro'),
          console.log(error)
      }
    )
  }
}
