import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountPipe, Game, GamePricePipe } from '@gog-task/core';
import { CardComponent } from '@gog-task/ui';

@Component({
  selector: 'app-game-card',
  imports: [CommonModule, CardComponent, DiscountPipe, GamePricePipe],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCardComponent {
  readonly game = input.required<Game>();
  readonly badge = computed(() => {});

  protected addToCart(): void {}
}
