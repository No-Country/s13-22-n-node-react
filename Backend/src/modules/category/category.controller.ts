import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreatecategoryDto } from './dto/create-category.dto';
import { UpdatecategoryDto } from './dto/update-category.dto';
import { ApiTags } from '@nestjs/swagger';
import { AllExceptionFilter } from 'src/common/filter/exception.filter';
import { VERSION } from 'src/common/constants';
import { ERole } from 'src/common/enum';
import { Auth } from 'src/common/decorators/auth.decorator';

@ApiTags('Category')
@UseFilters(AllExceptionFilter)
@Controller(`api/${VERSION}/category`)
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Auth(ERole.ADMIN)
  @Post()
  create(@Body() createcategoryDto: CreatecategoryDto) {
    return this.categoryService.create(createcategoryDto);
  }

  @Auth(ERole.ADMIN, ERole.CUSTOMER)
  @Get()
  findAll(@Query('limit') limit: number, @Query('offset') offset: number) {
    return this.categoryService.findAll({ limit, offset });
  }

  @Auth(ERole.ADMIN, ERole.CUSTOMER)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @Auth(ERole.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatecategoryDto: UpdatecategoryDto) {
    return this.categoryService.update(id, updatecategoryDto);
  }

  @Auth(ERole.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }

  @Auth(ERole.ADMIN)
  @Patch('/restore/:id')
  restore(@Param('id')id:string){
    return this.categoryService.retore(id);
  }

}
