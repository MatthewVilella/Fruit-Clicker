import { Component, ChangeDetectorRef } from '@angular/core';
import { ScoreService } from '../Scores/score.service';
import { StopwatchService } from '../stopwatch/stopwatch.service';

@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

  constructor(public scoreService: ScoreService, public cdr: ChangeDetectorRef, public stopwatchService: StopwatchService) { }

  startGame() {
    this.scoreService.startClicked = true;
    this.cdr.detectChanges();
  }

}
