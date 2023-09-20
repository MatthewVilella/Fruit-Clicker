import { Component, OnInit } from '@angular/core';
import { StopwatchService } from './stopwatch.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
})
export class StopwatchComponent implements OnInit {
  seconds = 0;

  constructor(public stopwatchService: StopwatchService) { }

  ngOnInit() {
    // Subscribe to the StopwatchService's timer observable to receive updates
    this.stopwatchService.getTimer().subscribe((seconds) => {
      // Update the 'seconds' property when the timer changes
      this.seconds = seconds;
    });
  }
}
