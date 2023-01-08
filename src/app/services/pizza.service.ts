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

  public getPizzaID (id:any){
    return this.http.get(`${this.API_URL}/pizza/`+id)
  }
}
