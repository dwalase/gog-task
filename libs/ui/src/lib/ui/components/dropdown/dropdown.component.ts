import { Component, input, signal, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Icons } from '../../consts/Icons';
import { CdkConnectedOverlay, CdkOverlayOrigin, OverlayRef } from '@angular/cdk/overlay';

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
})
export class DropdownComponent {
  readonly dropdownText = input.required<string>();
  readonly dropdownIcon = input<Icons>();

  protected isOpen = false;
}
