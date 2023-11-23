import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, words: number): string {
    if (!value) return '';
    const truncatedWords = value.split(/\s+/).slice(0, words).join(' ');
    return `${truncatedWords}...`;
  }


}
