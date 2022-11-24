import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blot-column',
  templateUrl: './blot-column.component.html',
  styleUrls: ['./blot-column.component.scss'],
})
export class BlotColumnComponent implements OnInit {
  @Input() scoreArray = [0];
  @Input() columnTitle = '';
  @Input() color = 'green';
  @Input() quanshCrac = '';

  constructor() {}

  ngOnInit(): void {}
}
