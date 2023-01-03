import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-type',
  templateUrl: './card-type.component.html',
  styleUrls: ['./card-type.component.scss'],
})
export class CardTypeComponent implements OnInit {
  activeCardType = 0;
  constructor() {}

  ngOnInit(): void {}

  setActiveCardType(typeNumber: number) {
    this.activeCardType = typeNumber;
  }
}
