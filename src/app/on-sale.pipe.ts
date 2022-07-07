import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSale'
})
export class OnSalePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log('my pipe',value);
    if(Number (value)>0){
      return 'Oke b ơi'
    }
    return null;
  }

}
