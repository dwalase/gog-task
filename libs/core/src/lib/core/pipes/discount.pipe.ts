import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(value: number | undefined,): string {
    return value ? `-${value}%` : '';
  }
}
