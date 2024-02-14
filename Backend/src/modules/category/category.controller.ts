import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { categoryService } from './category.service';
import { CreatecategoryDto } from './dto/create-category.dto';
import { UpdatecategoryDto } from './dto/update-category.dto';
import path from 'path';

@Controller('category')
export class categoryController {
  constructor(private readonly categoryService: categoryService) {}

  @Post()
  create(@Body() createcategoryDto: CreatecategoryDto) {
    return this.categoryService.create(createcategoryDto);
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatecategoryDto: UpdatecategoryDto) {
    return this.categoryService.update(id, updatecategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }

  @Patch('/restore/:id')
  restore(@Param('id')id:string){
    return this.categoryService.retore(id);
  }

}
