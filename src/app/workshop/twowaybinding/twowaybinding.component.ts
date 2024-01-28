import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.scss']
})

export class TwowaybindingComponent implements OnInit {

  name !: string;
  born !: number;
  old !: number;
  myName!: string;
  currentYear: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {

  }
}
