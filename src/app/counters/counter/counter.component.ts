import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  @Input() iconName = '';
  counter = 0;
  constructor() {}

  ngOnInit(): void {}
  increment() {
    if (this.counter >= 0) this.counter++;
  }
  decrement() {
    if (this.counter > 0) this.counter--;
  }
  resetCounter() {
    this.counter = 0;
  }
}
