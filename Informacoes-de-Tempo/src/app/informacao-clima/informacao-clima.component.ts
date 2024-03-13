import { Component } from '@angular/core';
import { SeletorCidadeComponent } from '../seletor-cidade/seletor-cidade.component';


@Component({
  selector: 'app-informacao-clima',
  standalone: true,
  imports: [SeletorCidadeComponent],
  templateUrl: './informacao-clima.component.html',
  styleUrl: './informacao-clima.component.css'
})
export class InformacaoClimaComponent {

}
