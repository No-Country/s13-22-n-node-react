import{IsString} from 'class-validator';

export class CreatecategoryDto {
    
    @IsString()
    name:string

    @IsString()
    type: string
}
