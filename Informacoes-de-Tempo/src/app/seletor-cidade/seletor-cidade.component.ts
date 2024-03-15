import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServicoClimaService } from '../servico-clima.service';
import { InformacaoClimaComponent } from '../informacao-clima/informacao-clima.component';

@Component({
  selector: 'app-seletor-cidade',
  standalone: true,
  imports: [CommonModule, FormsModule, InformacaoClimaComponent],
  templateUrl: './seletor-cidade.component.html',
  styleUrls: ['./seletor-cidade.component.css']
})
export class SeletorCidadeComponent {

  nomeCidade: string = '';

  weather: string | null = null;

  private cityService: ServicoClimaService;

  constructor(private cityServiceInstance: ServicoClimaService) {
    this.cityService = cityServiceInstance;
  }

  getWeather(): void {
    this.cityService.geocodificar(this.nomeCidade).subscribe(
      (response: any) => {
        console.log('Response:', response);

        if (response.weather && response.weather.length > 0) {
          this.weather = response.weather[0].description;
          console.log('Weather Description:', this.weather);
        } else {
          console.warn('No weather data found.');
        }
      },
      (error: any) => {
        console.error('Error fetching city data:', error);
      }
    );
  }
  
}
