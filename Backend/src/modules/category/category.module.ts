import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { categoryService } from './category.service';
import { categoryController } from './category.controller';
import { category } from './entities/category.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([category])
  ], 
  controllers: [categoryController],
  providers: [categoryService],
})
export class categoryModule {}
