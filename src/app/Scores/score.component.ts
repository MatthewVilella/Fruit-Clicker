import { Component } from '@angular/core';
import { ScoreService } from './score.service';
import { StopwatchService } from '../stopwatch/stopwatch.service';

@Component({
  selector: 'score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {

  constructor(public scoreService: ScoreService, public stopwatchService: StopwatchService) { }

  //Resets the Game 
  ngOnInit() {
    this.scoreService.restart()
    this.stopwatchService.reset()
    this.stopwatchService.start()
  }

  getScore(): number {
    return this.scoreService.getScore();
  }

  getLives(): string {
    return this.scoreService.getLives();
  }

}
