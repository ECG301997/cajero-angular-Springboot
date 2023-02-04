import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Persona/add/add.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { EditComponent } from './Persona/edit/edit.component';
import { ConsignarComponent } from './Persona/consignar/consignar.component'; 

const routes: Routes = [
  {path: 'listar',component: ListarComponent},
  {path: 'add',component: AddComponent},
  {path: 'retirar/:id/:saldo',component: EditComponent},
  {path: 'consignar/:id/:saldo',component: ConsignarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
