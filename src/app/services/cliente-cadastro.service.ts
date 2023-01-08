import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',

})
export class ClienteCadastroService {

  API_URL = 'http://localhost:8080';
  novoCliente: any;


  constructor(
    private http: HttpClient
  ) { }

  public getCliente() {
    return this.http.get(`${this.API_URL}/clientes`);
  }

  public postClient(cadastroForm:any){
    return this.http.post(`${this.API_URL}/cliente/create`,cadastroForm);
  }

  public getClienteID (id:any){
    return this.http.get(`${this.API_URL}/cliente/`+id)
  }

  public enviarCliente (cliente: any){
    this.novoCliente=cliente;
    console.log('enviarCliente',this.novoCliente);
    
  }

  public receberCliente(novoCliente:any){
    //console.log('receber',novoCliente);
    return this.novoCliente
  }

}
