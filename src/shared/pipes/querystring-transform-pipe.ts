import { PipeTransform, Pipe, ArgumentMetadata } from '@nestjs/common';

@Pipe()
export class QuerystringTransformPipe implements PipeTransform<any> {
  transform(value: any, metadata: ArgumentMetadata) {
    var result = {};
    for (var property in value) {
        var keys = property.split('.');
        result = this.addProperty(keys, 0, result, value[property]);
    }
    return result;
  }

  addProperty(keys, index, obj, value): any {
    if(!obj.hasOwnProperty(keys[index])) {
        if(index === keys.length - 1) {
            obj[keys[index]] = value;
        } else {
            obj[keys[index]] = {};
        }
    }
    if(index < keys.length -1) {
        var temp = obj[keys[index]];
        obj[keys[index]] = this.addProperty(keys, ++index, temp, value);
    }
    return obj;
  }
}