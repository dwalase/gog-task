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
  protected readonly imgUrl = input.required<string>();
  protected readonly header = input.required<string>();
  protected readonly buttonText = input.required<string>();
  protected readonly buttonDisabled = input<boolean>(false);
  protected readonly buttonDisabledDontBlur = input<boolean>(false);
  protected readonly badge = input<string>();

  protected readonly buttonClick = output<void>();

  protected onButtonClick(): void {
    this.buttonClick.emit();
  }
}
