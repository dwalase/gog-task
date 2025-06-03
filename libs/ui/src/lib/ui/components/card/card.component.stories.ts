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
    imgUrl: 'https://fastly.picsum.photos/id/993/196/110.jpg?hmac=xDD07jMRWWYjtXrBAyqZQlMJ-sUifBYb4BUMdRbgOO4',
    badge: '-50%',
    buttonText: '$10',
    buttonDisabled: false,
    buttonDisabledDontBlur: false
  },
};

export const Disabled: Story = {
  args: {
    header: 'assassin’s creed: director’s cut',
    imgUrl: 'https://fastly.picsum.photos/id/993/196/110.jpg?hmac=xDD07jMRWWYjtXrBAyqZQlMJ-sUifBYb4BUMdRbgOO4',
    badge: '-50%',
    buttonText: '$10',
    buttonDisabled: true,
    buttonDisabledDontBlur: false
  },
};

export const WithoutBadge: Story = {
  args: {
    header: 'assassin’s creed: director’s cut',
    imgUrl: 'https://fastly.picsum.photos/id/993/196/110.jpg?hmac=xDD07jMRWWYjtXrBAyqZQlMJ-sUifBYb4BUMdRbgOO4',
    buttonText: '$10',
    buttonDisabled: false,
    buttonDisabledDontBlur: false
  },
};
