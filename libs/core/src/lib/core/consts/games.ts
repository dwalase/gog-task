import { Game } from '../models';

export const Games: Game[] = [
  {
    id: 6,
    name: 'assassin’s creed: director’s cut',
    price: 9.99,
    thumbnail: 'assets/assassin.png',
    ownership: 'InCart'
  },
  {
    id: 5,
    name: 'neverwinter nights',
    price: 9.99,
    thumbnail: 'assets/neverwinter',
    discount: 50
  },
  {
    id: 4,
    name: 'The settlers 2: gold',
    price: 9.99,
    thumbnail: 'assets/settlers',
    ownership: 'InCart'
  },
  {
    id: 3,
    name: 'chaos on deponia',
    price: 9.99,
    thumbnail: 'assets/deponia',
    ownership: 'Owned'
  },
  {
    id: 2,
    name: 'oddworld: stranger’s wrath',
    price: 9.99,
    thumbnail: 'assets/oddworld',
    discount: 50
  }
];
