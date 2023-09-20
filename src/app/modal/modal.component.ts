import { Component, Renderer2, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ScoreService } from '../Scores/score.service';
import { StopwatchService } from '../stopwatch/stopwatch.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {

  constructor(public renderer: Renderer2, public el: ElementRef, public scoreService: ScoreService, public cdr: ChangeDetectorRef, public stopwatchService: StopwatchService) { }

  restartGame() {
    this.scoreService.startClicked = true;
    this.cdr.detectChanges();
  }

  // Function to activate a button and trigger a modal
  activateButton() {
    const button = this.el.nativeElement.querySelector('.btn-primary');

    if (button) {
      this.renderer.setAttribute(button, 'data-bs-toggle', 'modal');
      this.renderer.setAttribute(button, 'data-bs-target', '#exampleModal');
      // Simulate a click on the button
      button.click();

      //Stops them Game
      this.scoreService.startClicked = false;
      this.stopwatchService.stop();
      this.scoreService.livesLeft = 4
    }
  }

  ngOnInit(): void {
    setInterval(() => {
      // Reset if the number of lives left is 3
      if (this.scoreService.livesLeft === -5) {
        this.activateButton();
        // Trigger change detection
        this.cdr.detectChanges();
      }
      // Ensure that the button time is at least 2000 milliseconds
      else if (this.scoreService.buttonTime < 2000) {
        this.scoreService.buttonTime = 2000;
      }
    }, 100);
  }


}
