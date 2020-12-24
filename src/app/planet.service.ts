import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Planet } from './planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  url = 'https://assignment-machstatz.herokuapp.com/planet';

  constructor(private http: HttpClient) { }

  getPlanets() {
    return this.http.get<Planet[]>(this.url);
  }
}
