import { Injectable } from '@angular/core';
import { Observable, Subject, interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StopwatchService {
  // Subject to emit timer values
  public timer$ = new Subject<number>();

  public isRunning = false;
  public interval$ = interval(1000);
  public subscription: Subscription | undefined;
  public seconds = 0;

  // Function to start the stopwatch
  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      // Subscribe to the interval to increment the seconds and emit timer values
      this.subscription = this.interval$.subscribe(() => {
        this.seconds++;
        this.timer$.next(this.seconds); // Emit the updated seconds value
      });
    }
  }

  // Function to stop the stopwatch
  stop() {
    if (this.isRunning && this.subscription) {
      this.isRunning = false;
      this.subscription.unsubscribe();
    }
  }

  // Function to reset the stopwatch
  reset() {
    this.isRunning = false;
    this.seconds = 0;
    this.timer$.next(this.seconds);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  // Function to get the timer as an observable
  getTimer(): Observable<number> {
    return this.timer$.asObservable();
  }

}
