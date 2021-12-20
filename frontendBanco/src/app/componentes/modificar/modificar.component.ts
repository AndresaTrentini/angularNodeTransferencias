import { Component, OnInit } from '@angular/core';
import { TranferenciasService, Transferencias } from 'src/app/servicos/tranferencias.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  transferencia:Transferencias={
    id_transferencia:'',
    nome_cliente:'',
    valor:'',
    conta_cliente:''

  }

  constructor(private transferenciaService: TranferenciasService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    const id_entrada = <any>this.activatedRoute.snapshot.params['id']
    console.log ('id de entrada: ' + id_entrada)
    this.transferenciaService.listarUmaTransferencia(id_entrada).subscribe({
      next: (resposta) => {console.log(resposta)
                           this.transferencia = <any>resposta},
      error:(erro) => console.error(erro),
      complete:() => console.info('complete')

    })
  }
  modificar(){
    this.transferenciaService.editarTranferencia(this.transferencia.id_transferencia,this.transferencia).subscribe({
      next: (resposta) => console.log('tarefa editada com sucesso!'),
      error: (erro) => console.error(erro),
      complete: () =>  console.info('complete')
    })
    this.router.navigate(['/transferencias'])
  }

}
