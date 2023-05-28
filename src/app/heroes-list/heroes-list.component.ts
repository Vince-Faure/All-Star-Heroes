import { Component, OnInit } from '@angular/core';
import Hero from '../types/hero.type';


@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes: Hero[] =[
    {id : 1 , name : 'BatMan', superPower:'Money', realName : 'Bruce Wayne', picturePath : '../assets/Batman.png'},
    {id : 2 , name : 'Deadpool', superPower:'UnKillable', realName : 'Wayde Wilson', picturePath : '../assets/Deadpool.png'},
    {id : 3 , name : 'Storm', superPower:'Weather Witch', realName : 'Ororo Munroe', picturePath : '../assets/Storm.png'},
    {id : 4 , name : 'Punisher', superPower:'Abnormally Pain Tolerance ', realName :'Franck Castle', picturePath :'../assets/Punisher.png'},
  ]

  selectedHero: Hero;

  constructor() { }

  selectHero(hero: Hero){
    this.selectedHero = hero;
  }

  ngOnInit() {
  }

}
