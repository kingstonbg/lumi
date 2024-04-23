import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translationParamWrap'
})
export class TranslationParamWrapPipe implements PipeTransform {

  transform(value: unknown, wrapperTag: string = ``): unknown {
    if(!wrapperTag)
      return `{{${value}}}`;
    return `<${wrapperTag}>${value}</${wrapperTag}>`;
  }

}
