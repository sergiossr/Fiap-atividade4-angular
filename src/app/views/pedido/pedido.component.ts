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
  ClienteID: number = 0;
  clienteForm: any;
  redenrizarCliente = false;

  //Variaveis para pedido
  x:any[]=[];
  PizzaID: any[] = [];
  ID: any[] = [];
  nomesPizzas:any[] = [];
  renderizarPedido = false;
  payload: any = [];
  
  constructor(
    private clienteCadastroService: ClienteCadastroService,
    private pedidoService: PedidoService,
    private pizzaService: PizzaService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.PizzaID = this.pizzaService.getPizzasIDCardapio()
    //this.PizzaID.push(this.Pizza.id)

    this.ID = this.PizzaID.map(pizza => pizza.id);
    console.log('ID[]', this.ID);

    this.nomesPizzas = this.PizzaID.map(pizza => pizza.name); 
    console.log('dentro de receber pizza',this.nomesPizzas);

    if (this.nomesPizzas.length > 0) {
      this.renderizarPedido = true;
      console.log(this.renderizarPedido)
    }

    this.Cliente = this.clienteCadastroService.receberCliente(this.Cliente)
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
  }

  excluirPizza(id: number, pizza:any) {
    this.ID = this.ID.filter(ID=>!(ID == id));
    this.nomesPizzas = this.nomesPizzas.filter(nomesPizzas=>!(nomesPizzas == pizza))
  
    console.log('ID atualizado',this.ID);

    this.pizzaService.updateNumberArray(this.ID);

    if (this.ID.length == 0){
    this.renderizarPedido = false;
  }
     //this.pizzaService.deletarPizzasIDCardapio(id);
      
    }
  

  enviarPedido() {

    console.log('dentro de pedido', this.ID)

    this.payload = {
      "pizzasId": this.ID,
      "novasPizzas": [
        {
            nome: [],
            ingredients: []
        }
    ],
      "clienteId": this.ClienteID
    };


    if (this.ID.length>0 && this.ClienteID>0){ //loop para ignorar o endpoint create novasPizzas

    this.pedidoService.postPedido(this.payload).subscribe(
      succes => {
        alert('Pedido realizado')
        console.log('payload', this.payload)

      },
      error => {
        alert('Erro'),
          console.log(error)
      }
    )
    }
    else
    {
      alert('Cadastro ou pedido invalidos')
    }

  }
}

