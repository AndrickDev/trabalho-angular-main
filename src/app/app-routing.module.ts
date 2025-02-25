import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarComponent } from './tarefas/adicionar/adicionar.component';

const routes: Routes = [
  { path: '', redirectTo: 'tarefas/adicionar', pathMatch: 'full'},
  { path: 'tarefas', loadChildren: () => import('./tarefas/tarefas.module').then(m => m.TarefasModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
