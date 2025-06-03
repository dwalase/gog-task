import { Pipe, PipeTransform } from '@angular/core';
import { formatPrice } from '../utils/price';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(value: number): string {
    return formatPrice(value);
  }
}
