import { Component, OnInit } from '@angular/core';
import { PlanetService } from './planet.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private planetService: PlanetService) {}

  extras = [
    { image: 'mercury.jpg', fact: `Mercury is the smallest planet in the solar system. The diminutive planet is about 3,030 miles (4,876 kilometers) in diameter, making it about the size of the continental United States and only slightly bigger than Earth's moon. It's smaller than both Saturn's moon Titan and Jupiter's moon Ganymede.`},
    { image: 'venus.jpg', fact: `Venus is the second planet from the Sun and the third brightest object in Earth's sky after the Sun and Moon. It is sometimes referred to as the sister planet to Earth, because their size and mass are so similar. Venus is also the closest planet to Earth.`},
    { image: 'earth.jpg', fact: `Earth, our home, is the third planet from the sun. It's the only planet known to have an atmosphere containing free oxygen, oceans of water on its surface and, of course, life. Earth is the fifth largest of the planets in the solar system.`},
    { image: 'mars.jpg', fact: `Mars is the fourth planet from the sun. Befitting the Red Planet's bloody color, the Romans named it after their god of war. In truth, the Romans copied the ancient Greeks, who also named the planet after their god of war, Ares`},
    {image: 'ceres.jpg', fact: `Ceres is the largest object in the main asteroid belt that lies between the orbits of Mars and Jupiter. With a diameter of 940 km, Ceres is both the largest of the asteroids and the only dwarf planet inside Neptune's orbit. It is the 25th-largest body in the Solar System within the orbit of Neptune`},
    {image: 'jupiter.jpg', fact: `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined`},
    {image: 'saturn.jpg', fact: `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive`},
    {image: 'pluto.jpg', fact: `Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It was the first and the largest Kuiper belt object to be discovered. After Pluto was discovered in 1930 it was declared to be the ninth planet from the Sun`},
    {image: 'haumea.jpg', fact: `Haumea is the third closest dwarf planet to the Sun and is located beyond the orbit of Neptune. It has about 1/3 the mass of Pluto and was discovered by 2004 by a team from Caltech at the Palomar Observatory in the United States in a project headed by Mike Brown.`},
    {image: 'makemake.jpg', fact: `Makemake is a likely dwarf planet and perhaps the second largest Kuiper belt object in the classical population, with a diameter approximately two-thirds that of Pluto. Makemake has one known satellite.`},
    {image: 'eris.jpg', fact: `Eris is the most massive and second-largest known dwarf planet in the Solar System. Eris was discovered in January 2005 by a Palomar Observatory-based team led by Mike Brown, and its discovery was verified later that year.`}
  ];

  ngOnInit(): void {
      this.getPlanets();
  }

  getPlanets() {
    this.planetService.getPlanets().subscribe(response => {
      for(let i=0;i<=response.length; i++) {
       _.merge(response[i], this.extras[i]);
      }
      if(localStorage.getItem('planetList') === null) {
        localStorage.setItem('planetList', JSON.stringify(response));
      }
    });
  }
}
