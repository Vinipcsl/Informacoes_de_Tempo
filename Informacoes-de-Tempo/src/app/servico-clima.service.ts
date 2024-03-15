import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoClimaService {
  private apiUrl = 'http://api.openweathermap.org/data/2.5/weather'; 
  private apiKey = 'ca503b1b480bc8863d1808c0b5d67165'; 

  constructor(private http: HttpClient) { 
  }

  geocodificar(endereco: string): Observable<any> {
    const url = `${this.apiUrl}?q=${endereco}&appid=${this.apiKey}`; 
    return this.http.get(url);
  }
}
