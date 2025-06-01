import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'lib-card',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  readonly imgUrl = input.required<string>();
  readonly header = input.required<string>();
  readonly buttonText = input.required<string>();
  readonly buttonDisabled = input<boolean>(false);
  readonly buttonDisabledDontBlur = input<boolean>(false);
  readonly badge = input<string>();

  readonly buttonClick = output<void>();

  protected onButtonClick(): void {
    this.buttonClick.emit();
  }
}
