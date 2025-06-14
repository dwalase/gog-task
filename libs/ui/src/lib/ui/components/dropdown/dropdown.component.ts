import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Icons } from '../../consts/Icons';
import {
  CdkConnectedOverlay,
  CdkOverlayOrigin,
  ConnectedPosition,
} from '@angular/cdk/overlay';

@Component({
  selector: 'lib-dropdown',
  imports: [
    CommonModule,
    NgOptimizedImage,
    CdkConnectedOverlay,
    CdkOverlayOrigin,
  ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {
  readonly dropdownConnection: ConnectedPosition = {
    originX: 'end',
    originY: 'bottom',
    overlayX: 'end',
    overlayY: 'top'
  }

  readonly dropdownText = input.required<string>();
  readonly dropdownIcon = input<Icons>();

  protected isOpen = signal(false);

  protected switchDropdown(): void {
    this.isOpen.set(!this.isOpen());
  }

  protected setDropdown(visibility: boolean): void {
    this.isOpen.set(visibility);
  }
}
