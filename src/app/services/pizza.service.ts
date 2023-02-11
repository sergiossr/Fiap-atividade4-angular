import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  API_URL = 'http://localhost:8080'

  constructor(
    private http: HttpClient
  ) { }

  pizzaIDs: number[] = [];

  public getPizzaID (id:any){
    return this.http.get(`${this.API_URL}/pizza/`+id)
  }

  public getPizza() {
    return this.http.get(`${this.API_URL}/pizzas`);
  }

  public addPizzaID (pizza: any){
    this.pizzaIDs.push(pizza);
    //console.log('enviarPizza',this.pizzaIDs);
  }

  public getPizzasIDCardapio(){
    return this.pizzaIDs
  }

  public updateNumberArray(IDs: any[]){
  this.pizzaIDs = IDs  
  }
}
