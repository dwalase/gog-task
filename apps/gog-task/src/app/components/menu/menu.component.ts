import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from '@gog-task/ui';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, DropdownComponent, CartComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {}
