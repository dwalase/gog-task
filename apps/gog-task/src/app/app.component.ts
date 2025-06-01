import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameStore } from '@gog-task/store';
import { NgOptimizedImage } from '@angular/common';
import { GameCardComponent } from './components/game-card/game-card.component';

@Component({
  imports: [RouterModule, NgOptimizedImage, GameCardComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'gog-task';

  public store = inject(GameStore);
}
