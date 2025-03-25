import { Component } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgFor, NgIf, NgClass, FormsModule,
    MatButtonModule, MatInputModule, MatListModule, MatCardModule,
    MatFormFieldModule, MatToolbarModule
  ],
  template: `
    <mat-toolbar color="primary">
      <span>Gerenciador de Tarefas</span>
    </mat-toolbar>

    <div class="container">
      <mat-card class="card">
        <h1>{{ titulo }}</h1>
        <p>Total de tarefas: {{ tarefas.length }}</p>

        <mat-form-field appearance="outline" class="full-width">
          <input matInput [(ngModel)]="novaTarefa" placeholder="Nova tarefa">
        </mat-form-field>

        <div class="button-group">
          <button mat-raised-button color="primary" (click)="adicionarTarefa()">Adicionar</button>
          <button mat-raised-button color="accent" (click)="alternarLista()">
            {{ exibirLista ? 'Ocultar' : 'Exibir' }} Lista
          </button>
        </div>
      </mat-card>

      <mat-card class="card" *ngIf="exibirLista">
        <mat-list>
          <mat-list-item *ngFor="let tarefa of tarefas; let i = index">
            <span [ngClass]="{ 'tarefa-concluida': tarefa.concluida }">{{ tarefa.nome }}</span>
            <button mat-button color="warn" (click)="concluirTarefa(i)" [disabled]="tarefa.concluida">
              Concluir
            </button>
          </mat-list-item>
        </mat-list>
      </mat-card>
    </div>
  `,
  styles: [`
    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
    }

    .card {
      padding: 20px;
      margin-bottom: 20px;
    }

    .full-width {
      width: 100%;
    }

    .button-group {
      display: flex;
      gap: 10px;
      margin-top: 10px;
    }

    .tarefa-concluida {
      text-decoration: line-through;
      color: green;
    }
  `]
})
export class AppComponent {
  titulo = 'Gerenciador de Tarefas';
  novaTarefa = '';
  exibirLista = true;
  tarefas: { nome: string, concluida: boolean }[] = [];

  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      this.tarefas.push({ nome: this.novaTarefa, concluida: false });
      this.novaTarefa = '';
    }
  }

  concluirTarefa(index: number) {
    this.tarefas[index].concluida = true;
  }

  alternarLista() {
    this.exibirLista = !this.exibirLista;
  }
}
