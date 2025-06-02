import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DropdownComponent, Icons } from '@gog-task/ui';
import { GameStore } from '@gog-task/store';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, DropdownComponent, NgOptimizedImage],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  protected readonly Icons = Icons;

  private readonly store = inject(GameStore);
  protected readonly inCart = this.store.inCart;
  protected readonly inCartCount = computed(() =>
    this.inCart().length
  );
  protected readonly inCartPriceSum = computed(() =>
    this.inCart()
      .map(game => game.price)
      .reduce((previous, current) =>  previous + current, 0)
  );

  protected removeFromCart(id: number): void {
    this.store.removeFromCart(id);
  }

  protected removeAllFromCart(): void {
    this.store.removeAllFromCart();
  }
}
