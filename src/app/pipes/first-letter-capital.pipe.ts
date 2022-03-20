import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterCapital',
  // pure: true | false
})
export class FirstLetterCapitalPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let sentanceArray = value.trim().split(" ");
    let newArr: any = [];
    sentanceArray.map(each => newArr.push(each[0].toUpperCase() + each.slice(1)))
    return newArr.join(" ");
  }

}
