import { Component, OnInit } from '@angular/core';
import { TranferenciasService, Transferencias } from 'src/app/servicos/tranferencias.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-incio',
  templateUrl: './incio.component.html',
  styleUrls: ['./incio.component.css']
})
export class IncioComponent implements OnInit {

  listarTransferencia: Transferencias[]

  constructor(private transfenciasService:TranferenciasService,private router:Router) {
    this.listarTransferencia = []
   }

  ngOnInit(): void {
    this.listarTransferencias()
  }
  listarTransferencias (){
    this.transfenciasService.listarTransferencias().subscribe({
      next:(resposta)=>{
        console.log(resposta)
      this.listarTransferencia = <any>resposta},
      error:(erro) => console.error(erro),
      complete:() => console.info('complete')

    })

  }
  //função excluir por id
  excluir(id:any){
    this.transfenciasService.deleteTransferencia(id).subscribe({
      next:(resposta) => {console.log('transferência excluída')
                            this.listarTransferencias()},
       error:(erro) => console.error(erro),
       complete: () => console.info ('Processo de exclusão completado')
    })
  }
  editar(id:any){
    this.router.navigate(['/modificar/' + id])
  }

}
