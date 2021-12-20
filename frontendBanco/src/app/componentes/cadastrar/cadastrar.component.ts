import { Component, OnInit } from '@angular/core';
import { TranferenciasService,Transferencias } from 'src/app/servicos/tranferencias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  transferencias: Transferencias={
    id_transferencia:'',
    nome_cliente:'',
    valor:'',
    conta_cliente:''
  }

  constructor(private TransferenciasService:TranferenciasService, private router:Router) { }

  ngOnInit(): void {
  }

  add(){

    delete this.transferencias.id_transferencia
    this.TransferenciasService.addTransferencia(this.transferencias).subscribe({

    })
    this.router.navigate(['/transferencias'])
  }

}
