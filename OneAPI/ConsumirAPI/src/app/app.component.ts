import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Pessoa } from './models/pessoa';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  pessoas$?: Observable<Pessoa[]>;

  pessoaEncontrada$?: Observable<Pessoa>;
  valorBuscaPessoa: '';


  ngOnInit(): void {
    this.obterPessoas();
  }

  obterPessoas(){
    this.pessoas$ = this.http.get<Pessoa[]>(`${this.urlApi}/pessoas`)


  obterPessoaEspecifica(){

    this.pessoaEncontrada$ = this.http
    .get<Pessoa>(`${this.urlApi}/pessoas/${this.valorBuscaPessoa}`)
  
  }
  }
}
