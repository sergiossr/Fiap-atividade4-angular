import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClienteCadastroService } from 'src/app/services/cliente-cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastroForm: any;
  submitted = false;
  cliente: any;
  resposta: any;
  clienteID!: any;


  constructor(
    private clienteCadastroService: ClienteCadastroService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    /*
    this.clienteCadastroService.getCliente().subscribe(
      (data) => {
        console.log(data);
        this.cliente = data;
        this.id = this.cliente.id;
        console.log(this.cliente.id);
      },
      (error) => {
        console.log(error);
      }
    ) */
    this.cadastroForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.email],
      celular: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      rua: ["", Validators.required],
      numero: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      bairro: ["", Validators.required],
      cidade: ["", Validators.required]
    })
  }
  get cadastroFormControl() {
    return this.cadastroForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log("dentro do onsubmit");
    //console.log(this.cadastroForm);

    if (this.cadastroForm.valid) {
      this.clienteCadastroService.postClient(this.cadastroForm.value).subscribe(
        succes => {
          alert('Cliente cadastrado'),
          console.log('objeto:', succes),

          this.cliente = succes;
          console.log(this.cliente.id);
          this.clienteID = this.cliente.id

          this.clienteCadastroService.enviarCliente(this.cliente);

        },
        error => {
          alert('Erro'),
          console.log(error)
        }
      )
    }
  }

}

