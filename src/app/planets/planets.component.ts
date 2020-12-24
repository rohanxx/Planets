import { Planet } from './../planet';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: Planet[];

  constructor() { }

  ngOnInit(): void {
    this.fetchPlanetList();
  }

  fetchPlanetList() {
    this.planets = JSON.parse(localStorage.getItem('planetList'));
  }
}
