import type { Meta, StoryObj } from '@storybook/angular';
import { DropdownComponent } from './dropdown.component';
import { Icons } from '../../consts/Icons';

const meta: Meta<DropdownComponent> = {
  component: DropdownComponent,
  title: 'DropdownComponent',
};
export default meta;
type Story = StoryObj<DropdownComponent>;

export const Primary: Story = {
  args: {
    dropdownText: '2',
    dropdownIcon: Icons.ShoppingCart
  },
};
