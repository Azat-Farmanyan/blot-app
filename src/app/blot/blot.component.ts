import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../services/scores.service';

@Component({
  selector: 'app-blot',
  templateUrl: './blot.component.html',
  styleUrls: ['./blot.component.scss'],
})
export class BlotComponent implements OnInit {
  calcAreaColor = '#ccc';
  clickedColumnSum = 0;
  activeColumn = '';
  quanshCrac = '';
  constructor(public scoreService: ScoresService) {}

  ngOnInit(): void {}
  setActive(color: string, active: string) {
    this.activeColumn = active;
    this.calcAreaColor = color;
    this.scoreService.activeColumn = active;
    if (active !== 'score') {
      this.clickedColumnSum = this.scoreService.getLastSumOfArray(active);
    }
  }
}
