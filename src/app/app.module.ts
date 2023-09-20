import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PopupButtonComponent } from './Button/button.component';
import { ScoreComponent } from './Scores/score.component';
import { StartComponent } from './StartScreen/start.component';
import { ModalComponent } from './modal/modal.component';
import { ScoreService } from './Scores/score.service';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { StopwatchService } from './stopwatch/stopwatch.service';

@NgModule({
  declarations: [
    AppComponent,
    PopupButtonComponent,
    ScoreComponent,
    StartComponent,
    ModalComponent,
    StopwatchComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [ScoreService, StopwatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
