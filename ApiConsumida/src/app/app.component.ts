import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http'; // INSERIDO provideHttpClient, withFetch 
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core'; // INSERIDO NgModule
import { Observable } from 'rxjs';
import { Pessoa } from './models/pessoa';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Imports
import { BrowserModule } from '@angular/platform-browser';
import { ParseSpan } from '@angular/compiler';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'ConsumirAPI';
  http = inject(HttpClient);
  urlApi = 'http://localhost:5169';

  //Listar Pessoa
  pessoas$?: Observable<Pessoa[]>;



  // buscar Pessoa
  pessoaEncontrada$?: Observable<Pessoa>;
  valorBuscaPessoa = '';


  // adicionar Pessoa

  nomeAdicionar = '';

  //Atualizar uma pessoa
  idAtualizar = '';
  nomeAtualizar = '';



  ngOnInit(): void {
    this.obterPessoas();
  }

  obterPessoas() {
    this.pessoas$ = this.http.get<Pessoa[]>(`${this.urlApi}/pessoas`)
  }

  obterPessoaEspecifica() {
    this.pessoaEncontrada$ = this.http
      .get<Pessoa>(`${this.urlApi}/pessoas/${this.valorBuscaPessoa}`)
  }



  adicionarPessoa() {

    if (!this.nomeAdicionar)
      return;

    const pessoaCriar: Pessoa = {

      id: '8fd961d9-92ea-411a-a692-594283c2d9a1',
      nome: this.nomeAdicionar,
    }

    this.http.post<void>(`${this.urlApi}/pessoas`, pessoaCriar)
      .subscribe(_ => {
        this.obterPessoas();
        this.nomeAdicionar = '';
      });
  }

  obterDadosAtualizar(pessoa: Pessoa){
    console.log(pessoa);


    this.idAtualizar = pessoa.id;
    this.nomeAtualizar = pessoa.nome;
  }

  atualizarNome(){
    if(!this.nomeAtualizar)
      return;

    const pessoa: Pessoa = {

      id: this.idAtualizar,
      nome: this.nomeAtualizar
    }

    const url = `${this.urlApi}/pessoas/${this.idAtualizar}`;

    this.http.
    put<Pessoa>(  url, pessoa)
    .subscribe (_ => {
      this.obterPessoas()
      this.nomeAtualizar = '';
    })
  }
}


