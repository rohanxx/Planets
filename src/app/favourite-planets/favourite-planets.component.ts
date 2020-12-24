import { Planet } from './../planet';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite-planets',
  templateUrl: './favourite-planets.component.html',
  styleUrls: ['./favourite-planets.component.css']
})
export class FavouritePlanetsComponent implements OnInit {
  favouritePlanets: Planet[] = [];
  planets: Planet[];

  constructor() { }

  ngOnInit(): void {
    this.fetchFavouritePlanets();
  }

  fetchFavouritePlanets() {
    this.planets = JSON.parse(localStorage.getItem('planetList'));
    this.favouritePlanets = this.planets.filter(planet => planet.isFavourite === true);
  }

  isEmpty() {
    return this.favouritePlanets.length === 0  ? true : false;
  }
}
