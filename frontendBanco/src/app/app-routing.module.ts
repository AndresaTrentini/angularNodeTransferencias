import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncioComponent } from './componentes/incio/incio.component';
import { CadastrarComponent } from './componentes/cadastrar/cadastrar.component';
import { ModificarComponent } from './componentes/modificar/modificar.component';

const routes: Routes = [
  {path:"",redirectTo:"/transferencias", pathMatch:"full"},
  {path:"transferencias",component:IncioComponent},
  {path:"cadastrar", component:CadastrarComponent},
  {path:"modificar/:id", component:ModificarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
