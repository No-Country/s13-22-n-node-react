import { Injectable } from '@nestjs/common';
import { CreatecategoryDto } from './dto/create-category.dto';
import { UpdatecategoryDto } from './dto/update-category.dto';
import {category} from './entities/category.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { promises } from 'dns';
import { isEmpty } from 'class-validator';


@Injectable()
export class categoryService {
  
  constructor(
    @InjectRepository(category) private readonly CategoryRepository: Repository<category>,
  ){}


  async create(createcategoryDto: CreatecategoryDto): Promise<string> {
    
    await this.CategoryRepository.save(createcategoryDto);
    
    return `This action adds a new category ${createcategoryDto.name}`;
  }

  async findAll() {

    const category = await this.CategoryRepository.find();

    return category;
  }

  async findOne(id: string) {

    const category = await this.CategoryRepository.findOneByOrFail({id});
    return category;
  }

  async update(id: string, updatecategoryDto: UpdatecategoryDto):Promise<string> {

    const category = await this.CategoryRepository.findOneByOrFail({id});

    var mensaje = 'this register no fount';

    if(category != null){
      Object.assign(category, updatecategoryDto)
      await this.CategoryRepository.save(category);
    }else{
      return mensaje;
    }

    return `This action updates a #${updatecategoryDto.name} category`;
  }

  async remove(id: string) {

  
    const category = await this.CategoryRepository.findOneByOrFail({id});

    if(category != null){
      await this.CategoryRepository.softDelete(category.id);
      return `This action removes a #${id} category`;
    } else{
      var mensaje = 'this register no fount';
      return mensaje;
    } 

   
  }

  async retore(id: string) {

  
    const category = await this.CategoryRepository.findOneByOrFail({id});

    if(category != null){
      await this.CategoryRepository.restore(category.id);
      return `This action removes a #${id} category`;
    } else{
      var mensaje = 'this register no fount';
      return mensaje;
    } 

   
  }



}
