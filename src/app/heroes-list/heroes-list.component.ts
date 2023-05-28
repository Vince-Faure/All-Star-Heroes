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
    {id : 2 , name : 'Deadpool', superPower:'UnKillable', realName : 'Wayde Wilson'},
    {id : 3 , name : 'the Wasp', superPower:'Size Manipulation', realName : 'Janet van Dyne'},
    {id : 4 , name : 'Punisher', superPower:'Abnormally Pain Tolerance ', realName :'Franck Castle'}
  ]

  selectedHero: Hero;

  constructor() { }

  selectHero(hero: Hero){
    this.selectedHero = hero;
  }

  ngOnInit() {
  }

}
