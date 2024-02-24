import { Injectable } from '@nestjs/common';
import { CreatecategoryDto } from './dto/create-category.dto';
import { UpdatecategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { PaginationDto } from 'src/common/dto/pagination.dto';


@Injectable()
export class CategoryService {
  
  constructor(
    @InjectRepository(Category) private readonly CategoryRepository: Repository<Category>,
  ){}


  async create(createcategoryDto: CreatecategoryDto): Promise<string> {
    
    await this.CategoryRepository.save(createcategoryDto);
    
    return `This action adds a new category ${createcategoryDto.name}`;
  }

  async findAll({ limit=20, offset=0 }: PaginationDto) {

    const category = await this.CategoryRepository.find({
      take: limit,
      skip: offset,
    });

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
