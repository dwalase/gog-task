import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../models';

@Pipe({
  name: 'gamePrice',
})
export class GamePricePipe implements PipeTransform {
  transform(value: Game): string {
    if (value.ownership) {
      return value.ownership === 'InCart' ? 'In Cart' : 'Owned'
    }
    return `$${value.price}`;
  }
}
