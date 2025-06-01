import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountPipe, Game, GamePricePipe } from '@gog-task/core';
import { CardComponent } from '@gog-task/ui';
import { GameStore } from '@gog-task/store';

@Component({
  selector: 'app-game-card',
  imports: [CommonModule, CardComponent, DiscountPipe, GamePricePipe],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCardComponent {
  readonly game = input.required<Game>();
  private readonly store = inject(GameStore);

  protected addToCart(): void {
    this.store.addToCart(this.game().id);
  }
}
