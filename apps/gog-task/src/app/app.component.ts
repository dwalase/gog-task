import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameStore } from '@gog-task/store';
import { CartComponent } from './components/cart/cart.component';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  imports: [RouterModule, CartComponent, MenuComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public store = inject(GameStore);
}
