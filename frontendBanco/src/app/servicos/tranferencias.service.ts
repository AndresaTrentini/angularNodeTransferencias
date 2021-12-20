import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranferenciasService {

  url="http://localhost:3000/contas"

  constructor(private http:HttpClient) {}
  listarTransferencias(){
    return this.http.get(this.url)
  }
  listarUmaTransferencia(id:any){
    return this.http.get(this.url + '/' + id)
  }
  //adicionar
  addTransferencia(transferencias:Transferencias){
    return this.http.post(this.url,transferencias)
  }
  //excluir
  deleteTransferencia(id:any){
    return this.http.delete(this.url + '/' + id)
  }
  // modificar
  editarTranferencia(id:any,transferencias:Transferencias){
    return this.http.put(this.url + '/' + id, transferencias)
  }


}

export interface Transferencias{
  id_transferencia?:string
  nome_cliente?:string
  valor?:string
  conta_cliente?:string
}
