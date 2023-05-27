import { Component, OnInit } from '@angular/core';
import Vilain from '../types/vilain.type';


@Component({
  selector: 'app-vilains-list',
  templateUrl: './vilains-list.component.html',
  styleUrls: ['./vilains-list.component.css']
})
export class VilainsListComponent implements OnInit {

vilains: Vilain[] = [
  {id : 1, name : 'Raz Al Ghul', superPower : 'Master of Dark Arts',realName : 'Raz Al Ghul'},
  {id : 2, name : 'Lex Luthor', superPower : 'Human Brain',realName : 'Lex'},
  {id : 3, name : 'KingPin' , superPower : 'Heavy Maffia Boss', realName : 'King'},
]
selectedVilain: Vilain;

constructor() { }

selectVilain(vilain: Vilain){
  this.selectedVilain = vilain;
}
ngOnInit() {

}
}