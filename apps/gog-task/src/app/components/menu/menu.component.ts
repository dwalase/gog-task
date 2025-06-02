import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, CartComponent, NgOptimizedImage],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {}
