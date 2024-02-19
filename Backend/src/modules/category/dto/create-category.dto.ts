import{IsNotEmpty, IsString} from 'class-validator';

export class CreatecategoryDto {
    
    @IsNotEmpty()
    @IsString()
    name:string


    @IsString()
    type: string
}
