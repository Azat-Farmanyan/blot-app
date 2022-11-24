import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ScoresService } from 'src/app/services/scores.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit, OnChanges {
  @Input() calcAreaColor = '#fff';
  @Input() activeColumn = '';
  @Input() currentColumnSum = 0;
  @Output() quanshsrac = new EventEmitter();

  addedNum = '';
  operator = '+';
  isKaput = false;
  constructor(private scoreService: ScoresService) {}

  ngOnChanges(): void {
    this.cancel();
  }

  ngOnInit(): void {}
  save() {
    this.isKaput = false;
    if (this.addedNum !== 'K') {
      // red
      if (this.calcAreaColor === '#BF0000') {
        this.scoreService.addNewScore(this.addedNum);
        this.currentColumnSum = 8;
        this.quanshsrac.emit('');
      } else {
        let result = 0;
        if (this.operator === '+') {
          result = +this.addedNum + this.currentColumnSum;
          this.scoreService.addNewScore(result);
        } else {
          result = this.currentColumnSum - +this.addedNum;
          this.scoreService.addNewScore(result);
        }
        this.currentColumnSum = 0;
      }
      this.addedNum = '';
    }
  }
  addNum(num: number) {
    if (this.addedNum.length < 3) this.addedNum += num;
  }
  cancel() {
    this.addedNum = this.addedNum.slice(0, this.addedNum.length - 1);
  }
  kaput() {
    if (this.activeColumn === 'score') {
      const kaputAudio = new Audio('../../../assets/sounds/kaput2.mp3');
      kaputAudio.play();
      this.addedNum = 'K';
      this.isKaput = true;
    }
    this.currentColumnSum = 0;
    this.scoreService.addNewScore('K');
    this.quanshsrac.emit('');
  }
  quansh() {
    const quanshAudio = new Audio('../../../assets/sounds/quansh.mp3');
    quanshAudio.play();
    this.quanshsrac.emit('quansh');
  }
  srac() {
    const sracAudio = new Audio('../../../assets/sounds/srac.mp3');
    sracAudio.play();
    this.quanshsrac.emit('srac');
  }
}
