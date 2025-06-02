import type { Meta, StoryObj } from '@storybook/angular';
import { DropdownComponent } from './dropdown.component';
import { Icons } from '../../consts/Icons';

const meta: Meta<DropdownComponent> = {
  component: DropdownComponent,
  title: 'DropdownComponent',
};
export default meta;
type Story = StoryObj<DropdownComponent & {dropdownText: string, dropdownIcon: Icons}>;

export const Primary: Story = {
  args: {
    dropdownText: '2',
    dropdownIcon: Icons.ShoppingCart
  },
  argTypes: {
    dropdownIcon: {
      options: Object.values(Icons),
      mapping: Object.values(Icons),
      control: {
        type: 'select',
        labels: Object.keys(Icons),
      },
    },
  },
  render: (args: any) => ({
    props: { ...args },
    template: `<lib-dropdown [dropdownText]="dropdownText" [dropdownIcon]="dropdownIcon">TEST VALUE</lib-dropdown>`
  })
};
