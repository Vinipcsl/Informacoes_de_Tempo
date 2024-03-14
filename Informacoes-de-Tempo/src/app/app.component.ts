import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeletorCidadeComponent } from './seletor-cidade/seletor-cidade.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SeletorCidadeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Informacoes-de-Tempo';
}
