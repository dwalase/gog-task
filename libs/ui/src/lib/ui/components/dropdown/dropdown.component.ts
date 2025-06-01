import { Component, input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Icons } from '../../consts/Icons';

@Component({
  selector: 'lib-dropdown',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  protected readonly dropdownText = input.required<string>();
  protected readonly dropdownIcon = input<Icons>();
}
