import { PipeTransform, Pipe, ArgumentMetadata, HttpException, HttpStatus } from '@nestjs/common';
import { Validator } from "class-validator";

@Pipe()
export class MongoIdValidationPipe implements PipeTransform<any> {
    transform(value: any, metadata: ArgumentMetadata) {
        const validator = new Validator();
        if(!validator.isMongoId(value)) {
            throw new HttpException('Not a valid id', HttpStatus.BAD_REQUEST);
        }
        return value;
    }
}