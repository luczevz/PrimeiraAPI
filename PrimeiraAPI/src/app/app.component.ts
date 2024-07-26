import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pessoa } from './models/pessoa';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  title = 'Consumir-APi-Angular';
  http = inject(HttpClient);
  urlApi = 'http://localhost:5169';
  pessoas$?: Observable<Pessoa[]>;


  ngOnInit(): void {
    this.obterPessoas();
  }

  obterPessoas(){

    this.pessoas$ = this.http.get<Pessoa[]>(`${this.urlApi}/pessoas`)
    
  

  }
}
