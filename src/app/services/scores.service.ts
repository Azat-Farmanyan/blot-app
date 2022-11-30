import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScoresService {
  we = [0];
  you = [0];
  score: Array<any> = [0];
  activeColumn = '';
  constructor() {}

  addNewScore(newScore: any) {
    if (String(newScore).length < 4) {
      if (this.activeColumn === 'we' && newScore !== 'K') {
        this.addWe(newScore);
      }
      if (this.activeColumn === 'you' && newScore !== 'K') {
        this.addYou(newScore);
      }
      if (this.activeColumn === 'score') {
        this.addScore(newScore);
      }
    }
  }

  addWe(newScore: number = 0) {
    if (this.we.length > 4) {
      this.we = this.we.splice(this.we.length - 4);
    }
    this.we.push(newScore);
  }
  addYou(newScore: number = 0) {
    if (this.you.length > 4) {
      this.you = this.you.splice(this.you.length - 4);
    }
    this.you.push(newScore);
  }
  addScore(newScore: any) {
    if (this.score.length > 0) {
      this.score = this.score.splice(this.score.length);
    }
    this.score.push(newScore);
  }

  getLastSumOfArray(arrayName: string) {
    switch (arrayName) {
      case 'we':
        return this.getLastElem(this.we);
      case 'you':
        return this.getLastElem(this.you);
      case 'score':
        return this.getLastElem(this.score);
    }
  }
  private getLastElem(array: any) {
    return array[array.length - 1];
  }

  clearScores() {
    this.we = [0];
    this.you = [0];
    this.score = [0];
    this.activeColumn = '';
  }
}
