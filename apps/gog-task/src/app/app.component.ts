import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameStore } from '@gog-task/store';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public store = inject(GameStore);
}
