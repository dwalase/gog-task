import type { Meta, StoryObj } from '@storybook/angular';
import { DropdownComponent } from './dropdown.component';

const meta: Meta<DropdownComponent> = {
  component: DropdownComponent,
  title: 'DropdownComponent',
};
export default meta;
type Story = StoryObj<DropdownComponent>;

export const Primary: Story = {
  args: {
    iconUrl: '',
    dropdownText: '2'
  },
};
