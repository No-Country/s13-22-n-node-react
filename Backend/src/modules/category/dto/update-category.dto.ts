import { PartialType } from '@nestjs/swagger';
import { CreatecategoryDto } from './create-category.dto';

export class UpdatecategoryDto extends PartialType(CreatecategoryDto) {

}
