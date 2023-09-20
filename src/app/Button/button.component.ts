import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../Scores/score.service';

@Component({
  selector: 'app-popup-button',
  templateUrl: './popup-button.component.html',
  styleUrls: ['./popup-button.component.css'],
})
export class PopupButtonComponent implements OnInit {
  topPosition: number = 0;
  leftPosition: number = 0;
  imageUrl: string = '';
  timeoutId: number | undefined;
  showButton: boolean = true;

  imageUrls: string[] = [
    "/assets/fruits/Pear.png",
    "/assets/fruits/Apple.png",
    "/assets/fruits/Bomb.png",
    "/assets/fruits/Grape.png",
    "/assets/fruits/Melon.png",
    "/assets/fruits/Mango.png",
    "/assets/fruits/Bomb.png",
    "/assets/fruits/Golden kiwi.png",
    "/assets/fruits/Strawberry.png",
    "/assets/fruits/Bomb.png",
    "/assets/fruits/Banana.png",
    "/assets/fruits/Kiwi.png",
    "/assets/fruits/Bomb.png",
  ]

  constructor(private scoreService: ScoreService) { }

  updateScore(): void {
    if (this.imageUrl.includes("Bomb")) {
      this.scoreService.subtractScore();
      this.updateButtonPosition();
      this.scoreService.subtractLives();
    }
    else {
      this.scoreService.incrementScore();

      // Reduce the time to display the button
      this.scoreService.buttonTime = this.scoreService.buttonTime - 100;

      // Hide the button
      this.showButton = false;

      setTimeout(() => { this.updateButtonPosition(); this.showButton = true; }, this.scoreService.buttonTime);
    }
    // Reset the timeout for hiding the button
    this.resetTimeout();
  }

  ngOnInit(): void {

    setInterval(() => {
      if (this.scoreService.livesLeft === 4) {
        // Clear the previous timeout
        clearInterval(this.timeoutId);
      }
    }, 100);

    this.updateButtonPosition();
    this.resetTimeout();
    this.scoreService.livesLeft--
  }

  // Randomly set the position and image of the button
  updateButtonPosition(): void {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const margin = 550;
    const minY = margin;
    const maxY = windowHeight - margin;
    const minX = margin;
    const maxX = windowWidth - margin;

    this.topPosition = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
    this.leftPosition = Math.floor(Math.random() * (maxX - minX + 1)) + minX;

    const randomIndex = Math.floor(Math.random() * this.imageUrls.length);
    this.imageUrl = this.imageUrls[randomIndex];

    if (this.imageUrl.includes("Bomb")) {
      // Reset the timeout for hiding the button if it's a bomb
      this.resetTimeout();
    }
  }

  // Reset the timeout for hiding the button
  resetTimeout(): void {
    if (this.timeoutId) {
      // Clear the previous timeout
      clearInterval(this.timeoutId);
    }

    // Set a new timeout to hide and reposition the button
    this.timeoutId = setInterval(() => {
      if (this.imageUrl.includes("Bomb")) {
        this.resetTimeout();
        setTimeout(() => { this.updateButtonPosition(); this.showButton = true; }, this.scoreService.buttonTime);
      }
      else {
        this.scoreService.subtractScore();
        setTimeout(() => { this.updateButtonPosition(); this.showButton = true; }, this.scoreService.buttonTime);
        console.log(this.scoreService.livesLeft)
      }
    }, this.scoreService.buttonTime) as unknown as number;
  }

}
