export interface Game {
  id: number;
  name: string;
  thumbnail: string;
  price: number;
  ownership?: 'Owned' | 'InCart';
  featured?: boolean;
  discount?: number;
}
