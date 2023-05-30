import { Component, OnInit } from '@angular/core';
import Hero from '../types/hero.type';


@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroListTitle ='Heroes List';

  heroes: Hero[] =[
    {id : 1 , name : 'Batman', superPower:'Money', realName : 'Bruce Wayne', weakness:' Psychological Trauma',quote:'"Let that be a lesson. In the future, be more careful from who you accept free lemonade."', picturePath : '../assets/Batman.png'},
    {id : 2 , name : 'Deadpool', superPower:'UnKillable', realName : 'Wayde Wilson',weakness:'None',quote:'Fxxxk-you!' ,picturePath : '../assets/Deadpool.png'},
    {id : 3 , name : 'Storm', superPower:'Weather Witch', realName : 'Ororo Munroe',weakness:'Severe Claustrophobia,',quote:'Well. I am Storm, monster... and I resist you! And I will not be destroyed!' ,picturePath : '../assets/Storm.png'},
    {id : 4 , name : 'Punisher', superPower:'Abnormally Pain Tolerance ', realName :'Franck Castle',weakness:'Finite Amount of Ammunition',quote:'Si vis pacem, para bellum' ,picturePath :'../assets/Punisher.png'},
  ]

  selectedHero: Hero;

  constructor() { }

  selectHero(hero: Hero){
    this.selectedHero = hero;
  }

  ngOnInit() {
  }

}
