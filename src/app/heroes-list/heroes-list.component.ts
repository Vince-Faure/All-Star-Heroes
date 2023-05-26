import { Component, OnInit } from '@angular/core';
import Hero from '../types/hero.type';
@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes: Hero[] =[
    {id : 1 , name : 'BatMan', superPower:'Money'},
    {id : 2 , name : 'SuperMan', superPower:'SuperStrength'},
    {id : 3 , name : 'SpiderMan', superPower:'Spider Senses'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
