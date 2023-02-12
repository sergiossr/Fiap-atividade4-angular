import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent {


  image: any;
  pizzas: any = [];
  pizzasTradicionais: any = [];
  pizzasClassicas: any = [];
  pizzasExclusivas: any = [];
  pizzaID: any;


  constructor(
    private pizzaService: PizzaService,
  ) { }

  ngOnInit(): void {
    this.pizzaService.getPizza().subscribe(
      (data) => {
        this.pizzas = data;
        console.log('dentro do cardapio', this.pizzas);

        this.pizzasTradicionais = this.pizzas.filter((pizza: any) => {
          return ['Calabresa', 'Mussarela', 'Marguerita'].includes(pizza.name);
        });

        this.pizzasClassicas = this.pizzas.filter((pizza: any) => {
          return ['Napolitana', 'Calabria', 'Pepperoni'].includes(pizza.name);
        });

        this.pizzasExclusivas = this.pizzas.filter((pizza: any) => {
          return ['Brasileira', 'Vegetariana', '4 Queijos'].includes(pizza.name);
        });

      })
  }


  getImageLink(pizza: any) {
    let imageUrl = '';

    switch (pizza.name) {
      case 'Calabresa':
        imageUrl = 'https://t2.rg.ltmcdn.com/pt/posts/9/8/3/pizza_calabresa_e_mussarela_4389_600.jpg'
        break;
      case 'Marguerita':
        imageUrl = 'https://pizzariadesucesso.com/wp-content/uploads/2018/11/images-4-2.jpeg'
        break;
      case 'Mussarela':
        imageUrl = 'https://simoesfilhoonline.com.br/wp-content/uploads/2021/09/pizza.jpg'
        break;
      case 'Napolitana':
        imageUrl = 'https://www.sabornamesa.com.br/media/k2/items/cache/0b242dd5a6f3b60d9c07a5d96a2bc449_XL.jpg'
        break;
      case 'Calabria':
        imageUrl = 'https://cardapio.caprese.com.br/wp-content/uploads/2020/11/Parma-Speciale-640x640.jpg'
        break;
      case 'Pepperoni':
        imageUrl = 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-de-pepperoni-0.jpg'
        break;
      case 'Brasileira':
        imageUrl = 'https://static.phdvasia.com/br/menu/single/desktop_thumbnail_49f967fc-7d02-4087-adae-7731dac50b70.jpg'
        break;
      case 'Vegetariana':
        imageUrl = 'https://masalabox.com/wp-content/uploads/2022/04/istockphoto-842082336-612x612-1.jpg'
        break;
      case '4 Queijos':
        imageUrl = 'https://a-static.mlcdn.com.br/800x560/pizza-quatro-queijos-saborosa-e-caprichada/restauranteepizzariasensacao/4bb3c9cabdbc11eba9914201ac18500e/147dae5246b08a5fce86b974ae2fb6df.jpeg'
        break;
      default: imageUrl = 'https://img.freepik.com/vetores-gratis/fatia-de-pizza-bonito-derretido-com-os-polegares-para-cima-dos-desenhos-animados-ilustracao-de-icone-de-vetor-icone-de-objeto-de-comida-isolado_138676-5546.jpg?w=740&t=st=1668586743~exp=1668587343~hmac=cba1cfd3729e47765e61db96ac3e3502b95e8cfb321d311806e9dc5a3e502ca5'
    }

    return imageUrl;
  }

  AdicionarPizza(pizza: any) {
    console.log('dentro de addPizza', pizza.name);
    this.pizzaService.addPizzaID(pizza);
    alert('Pizza adicionada')
  }

}
