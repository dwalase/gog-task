import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameStore } from '@gog-task/store';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  imports: [RouterModule, MenuComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public store = inject(GameStore);
}
