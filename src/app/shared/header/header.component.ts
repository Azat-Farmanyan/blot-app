import { Component, OnInit } from '@angular/core';
import { flatMap } from 'rxjs';
import { ScoresService } from 'src/app/services/scores.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  burgerIsOpen = false;
  burgerImgPath = '../../../assets/icons/burger.png';
  burgerCloseImgPath = '../../../assets/icons/close-burger.png';
  constructor(public scoresService: ScoresService) {}

  ngOnInit(): void {}

  navToggle() {
    console.log('nav toggle');
    this.burgerIsOpen = !this.burgerIsOpen;
  }
  clearBLotScore() {
    this.scoresService.clearScores();
    this.burgerIsOpen = false;
  }
}
