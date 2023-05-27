import { Component, OnInit } from '@angular/core';
import Hero from '../types/hero.type';
@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes: Hero[] =[
    {id : 1 , name : 'BatMan', superPower:'Money', realName : 'Bruce Wayne'},
    {id : 2 , name : 'SuperMan', superPower:'SuperStrength', realName : 'Clark Kent'},
    {id : 3 , name : 'Wonderwoman', superPower:'Demi Goddess', realName : 'Diana Prince'},
  ]

  selectedHero: Hero;

  constructor() { }

  selectHero(hero: Hero){
    this.selectedHero = hero;
  }

  ngOnInit() {
  }

}
