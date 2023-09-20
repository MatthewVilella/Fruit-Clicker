import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  score: number = 0;
  lives: string = "X X X";
  livesLeft: number = 4;
  startClicked: boolean = false;
  buttonTime: number = 5000;

  // Function to restart the game, resetting all values
  restart(): void {
    this.score = 0;
    this.lives = "X X X";
    this.livesLeft = 4;
    this.buttonTime = 5000;
  }

  getScore(): number {
    return this.score;
  }

  getLives(): string {
    return this.lives;
  }

  incrementScore(): void {
    this.score++;
  }

  subtractScore(): void {
    this.score--;
  }

  // Function to subtract a life and update the lives string
  subtractLives(): void {
    this.lives = this.lives.replace('X', '');
    this.livesLeft--;
    console.log(this.livesLeft)
  }

}
