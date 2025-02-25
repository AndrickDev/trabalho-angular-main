import { Component } from '@angular/core';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent {
  tituloCriar = "Criar Tarefa";
  listarTarefas = "Lista de Tarefas";
  tarefasConcluidas = "Concluídas";

  novaTarefa: string = '';
  tarefas: string[] = [];
  tarefasConcluidasLista: string[] = [];
  
  mostrarTodasTarefas: boolean = false;
  mostrarTodasConcluidas: boolean = false;

  criarTarefa() {
    if (this.novaTarefa.trim()) {
      this.tarefas.push(this.novaTarefa.trim());
      this.novaTarefa = '';
    }
  }

  toggleMostrarTodasTarefas() {
    this.mostrarTodasTarefas = !this.mostrarTodasTarefas;
  }

  toggleMostrarTodasConcluidas() {
    this.mostrarTodasConcluidas = !this.mostrarTodasConcluidas;
  }

  concluirTarefa(index: number) {
    const tarefaConcluida = this.tarefas[index];  
    this.tarefasConcluidasLista.push(tarefaConcluida);  
    this.tarefas = this.tarefas.filter((_, i) => i !== index); 
  }

  desfazerConclusao(index: number) {
    const tarefaDesfeita = this.tarefasConcluidasLista[index];
    this.tarefas.push(tarefaDesfeita);  
    this.tarefasConcluidasLista = this.tarefasConcluidasLista.filter((_, i) => i !== index);
  }

  get tarefasVisiveis() {
    return this.mostrarTodasTarefas ? this.tarefas : this.tarefas.slice(0, 2);
  }

  get tarefasConcluidasVisiveis() {
    return this.mostrarTodasConcluidas ? this.tarefasConcluidasLista : this.tarefasConcluidasLista.slice(0, 2);
  }

  get tarefasConcluidasCount() {
    return this.tarefasConcluidasLista.length;
  }

  get totalTarefas() {
    return this.tarefas.length + this.tarefasConcluidasLista.length;
  }
}