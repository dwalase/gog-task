import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { GameStore } from '@gog-task/store';
import { GameCardComponent } from '../game-card/game-card.component';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule, GameCardComponent, NgOptimizedImage],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent {
  private readonly store = inject(GameStore);
  protected readonly games = this.store.notFeatured;
  protected readonly featuredGame = this.store.featured;
}
