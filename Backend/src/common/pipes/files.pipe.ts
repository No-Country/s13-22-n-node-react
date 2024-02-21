import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class FilesValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // "value" is an object containing the file's attributes and metadata

    if (!value) throw new BadRequestException('Files is required');

    if(value.length === 0) throw new BadRequestException('No Files uploaded');

    return value;
  }
}