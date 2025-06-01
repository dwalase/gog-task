export interface Game {
  id: number;
  name: string;
  thumbnail: string;
  price: number;
  ownership?: 'Owned' | 'InCart';
  gameOfTheWeek?: boolean;
  discount?: number;
}
