import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicoClimaService {
  private apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?'; 
  private apiKey = 'ca503b1b480bc8863d1808c0b5d67165'; 
  enviarCidade: any;

  constructor(private http: HttpClient) { 
  }

  geocodificar(endereco: string) {
    const url = `${this.apiUrl}q=${encodeURIComponent(endereco)}&limit=5&appid=${this.apiKey}`; 
    return this.http.get(url);
  }
}
