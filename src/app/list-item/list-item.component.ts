import { Planet } from './../planet';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  
  @Input() planet: Planet;
  list: Planet[];
  toolTipText: String;
  myOptions = {
    'placement': 'bottom',
    'show-delay': 500
}
  baseUrl = 'https://rohanxx.github.io/planets/assets/img/';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.toolTipText = `<img src=${this.baseUrl}${this.planet.image}> </br> <p>${this.planet.fact}</p>`;
  }

  changeStatus() {
    this.list = JSON.parse(localStorage.getItem('planetList'));
    let result = this.list.find(planet => planet.id === this.planet.id);
    result.isFavourite = result.isFavourite === false ? true: false;
    localStorage.setItem('planetList', JSON.stringify(this.list));
    this.router.navigate(['/favourite']);
  }

  isFav() {
    return this.planet.isFavourite === true ? true: false;
  }
}
