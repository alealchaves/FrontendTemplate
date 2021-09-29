import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitarTamanhoString'
})
export class TamanhoStringPipe implements PipeTransform {

  transform(value: string, size: number = 10): string {
    if (!value) {
      return ''
    }

    if (value.length > size) {
      return value.substring(0, size) + ' ...'
    }

    return value
  }

}
