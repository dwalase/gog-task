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
    thumbnail: 'assets/neverwinter.png',
    discount: 50
  },
  {
    id: 4,
    name: 'The settlers 2: gold',
    price: 9.99,
    thumbnail: 'assets/settlers.png',
    ownership: 'InCart'
  },
  {
    id: 3,
    name: 'chaos on deponia',
    price: 9.99,
    thumbnail: 'assets/deponia.png',
    ownership: 'Owned'
  },
  {
    id: 2,
    name: 'oddworld: stranger’s wrath',
    price: 5.99,
    thumbnail: 'assets/oddworld.png',
    discount: 50
  },
  {
    id: 1,
    name: 'witcher',
    price: 9.99,
    thumbnail: 'assets/witcher.png',
    featured: true
  }
];
