import { Component, OnInit,Input } from '@angular/core';
import Vilain from '../types/vilain.type';

@Component({
  selector: 'app-vilain-details',
  templateUrl: './vilain-details.component.html',
  styleUrls: ['./vilain-details.component.css']
})
export class VilainDetailsComponent implements OnInit {

 @Input() vilain: Vilain;

  constructor() { }

  ngOnInit() {
  }

}
