import { Component, OnInit } from '@angular/core';
import Vilain from '../types/vilain.type';


@Component({
  selector: 'app-vilains-list',
  templateUrl: './vilains-list.component.html',
  styleUrls: ['./vilains-list.component.css']
})
export class VilainsListComponent implements OnInit {

  vilainListTitle = 'Vilains List';

vilains: Vilain[] = [
  {id : 1, name : 'The Joker', superPower : 'Insanity',realName : 'Unknown', weakness:'His Ego', quote : '\"It\'s funny. When I was a little boy and told people I was going to be a comedian, everyone laughed at me. Well, no one\'s laughing now!\"',  picturePath : '../assets/Joker.png'},
  {id : 2, name : 'Lex Luthor', superPower : 'Human Brain',realName : 'Lex Luthor', weakness:'Pride and Arrogance', quote : '\"We know better now that devils don\'t come from the hell beneath us, they come from the sky\"', picturePath : '../assets/LexLuthor.png'},
  {id : 3, name : 'KingPin' , superPower : 'Heavy Maffia Boss', realName : 'Wilson Fisk',weakness:'Grief and Trauma', quote : '"\I\'m gonna find you and I\'m gonna make you pay for what you\'ve done.\"', picturePath : '../assets/Kingpin.png'},
  {id : 4, name : 'Magneto', superPower : 'Magnetism Manipulation', realName : 'Max Eisenhart',weakness:'His Physical condition ', quote : '\“The thing none of you will ever understand is that there are no sides. ...\"', picturePath:'../assets/Magneto.png'},

]
selectedVilain: Vilain;

constructor() { }

selectVilain(vilain: Vilain){
  this.selectedVilain = vilain;
}
ngOnInit() {

}
}