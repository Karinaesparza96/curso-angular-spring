import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoria',
})
export class CategoriaPipe implements PipeTransform {
  transform(value: any): string {
    switch (value) {
      case 'front-end':
        return 'code';
      case 'back-end':
        return 'computer';
      default:
        return 'code';
    }
  }
}
