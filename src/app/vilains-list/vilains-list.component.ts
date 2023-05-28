import { Component, OnInit } from '@angular/core';
import Vilain from '../types/vilain.type';


@Component({
  selector: 'app-vilains-list',
  templateUrl: './vilains-list.component.html',
  styleUrls: ['./vilains-list.component.css']
})
export class VilainsListComponent implements OnInit {

vilains: Vilain[] = [
  {id : 1, name : 'The Joker', superPower : 'Insanity',realName : 'Unknown', picturePath : '../assets/Joker.png'},
  {id : 2, name : 'Lex Luthor', superPower : 'Human Brain',realName : 'Lex Luthor', picturePath : '../assets/LexLuthor.png'},
  {id : 3, name : 'KingPin' , superPower : 'Heavy Maffia Boss', realName : 'Wilson Fisk', picturePath : '../assets/Kingpin.png'},
  {id : 4, name : 'Magneto', superPower : 'Magnetism Manipulation', realName : 'Max Eisenhart', picturePath:'../assets/Magneto.png'},

]
selectedVilain: Vilain;

constructor() { }

selectVilain(vilain: Vilain){
  this.selectedVilain = vilain;
}
ngOnInit() {

}
}