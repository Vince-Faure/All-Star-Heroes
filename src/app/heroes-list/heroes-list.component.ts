import { Component, OnInit } from '@angular/core';
import Hero from '../types/hero.type';
@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes: Hero[] =[
    {id : 1 , name : 'BatMan'},
    {id : 2 , name : 'SuperMan'},
    {id : 3 , name : 'SpiderMan'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
