import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefasRoutingModule } from './tarefas-routing.module';
import { AdicionarComponent } from './adicionar/adicionar.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AdicionarComponent,
  ],
  imports: [
    CommonModule,
    TarefasRoutingModule,
    FormsModule
  ]
})
export class TarefasModule { }
