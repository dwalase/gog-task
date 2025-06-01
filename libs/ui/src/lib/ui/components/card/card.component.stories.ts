import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  component: CardComponent,
  title: 'CardComponent',
};
export default meta;
type Story = StoryObj<CardComponent>;

export const Primary: Story = {
  args: {
    header: 'assassin’s creed: director’s cut',
    imgUrl: 'https://loremflickr.com/cache/resized/defaultImage.small_1280_720_nofilter.jpg',
    badge: '-50%',
    buttonText: '$10',
    buttonDisabled: false,
    buttonDisabledDontBlur: false
  },
};
