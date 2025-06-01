import { Component, input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'lib-card',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  protected readonly imgUrl = input.required<string>();
  protected readonly header = input.required<string>();
  protected readonly buttonText = input.required<string>();
  protected readonly badge = input<string>();
}
