import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Persona/add/add.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { EditComponent } from './Persona/retirar/edit.component';

const routes: Routes = [
  {path: 'listar',component: ListarComponent},
  {path: 'add',component: AddComponent},
  {path: 'retirar/:id/:saldo',component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
