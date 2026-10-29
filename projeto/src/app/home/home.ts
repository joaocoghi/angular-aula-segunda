import { Component } from '@angular/core';
// Permitir que a gente vincule o input e as variáveis / for / if
import {CommonModule} from '@angular/common';
// Permitir que o Angular gerencie o formulário | Vinculo de botão com métodos
import {FormsModule} from '@angular/forms';
import { Atividade } from './atividade';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
// Atributo => Variável de uma classe
  public nome = '';
// Criando uma lista de atividades
  public lista: Atividade[] = [];
  public editando: number | null = null;

  adicionar(): void {
    const atividade: Atividade = {
      id: this.lista.length,
      nome: this.nome
    }
    // Eu adiciono à minha lista tudo o que na lista + atividade nova
    this.lista = [...this.lista, atividade];
    this.nome = '';
  }

  salvar(): void {
    this.lista = this.lista.map(item => item.id === this.editando ? {...item, nome: this.nome} : item);
    this.editando = null;
    this.nome = '';
  }

  // Salvo o nome da atividade que quero editar e o id deste objeto
  // Desta maneira, consigo desenhar no input o nome a ser editado e 
  // salvo o id do objeto para atualizar seu valor.
  editar(item:Atividade):void {
    this.nome = item.nome;
    this.editando = item.id;
  }

  excluir(id: number): void{
    this.lista.splice(id, 1);
  }

  cancelar(): void {
    this.nome = '';
  }

}
