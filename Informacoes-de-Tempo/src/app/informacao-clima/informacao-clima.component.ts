import { Component } from '@angular/core';
import { SeletorCidadeComponent } from '../seletor-cidade/seletor-cidade.component';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosClimaService {
  private cidadeSource = new BehaviorSubject<string>('');
  cidadeAtual = this.cidadeSource.asObservable();
  constructor() {}

  mudarCidade(cidade: string) {
    this.cidadeSource.next(cidade);
  }
}

@Component({
  selector: 'app-informacao-clima',
  standalone: true,
  imports: [SeletorCidadeComponent],
  templateUrl: './informacao-clima.component.html',
  styleUrl: './informacao-clima.component.css'
})

export class InformacaoClimaComponent {
  

}

