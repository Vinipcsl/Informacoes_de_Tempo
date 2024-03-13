import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServicoClimaService } from '../servico-clima.service';

@Component({
  selector: 'app-seletor-cidade',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './seletor-cidade.component.html',
  styleUrls: ['./seletor-cidade.component.css']
})
export class SeletorCidadeComponent {
  nomeCidade: string = '';

  constructor(private servicoClima: ServicoClimaService) {}

  enviarNomeCidade(): void {
    this.servicoClima.enviarCidade(this.nomeCidade).subscribe(
      (      data: any) => {
        console.log('Sucesso:', data);
      },
      (      error: any) => {
        console.error('Erro:', error);
      }
    );
  }
}
