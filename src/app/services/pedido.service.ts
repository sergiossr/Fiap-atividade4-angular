import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  API_URL = 'http://localhost:8080'

  constructor(
    private http: HttpClient
  ) { }

  public postPedido(payload:any){
    return this.http.post(`${this.API_URL}/pedido`,payload);
  }
}
