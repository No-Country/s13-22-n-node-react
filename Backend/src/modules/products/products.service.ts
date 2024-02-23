import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import{Product} from './entities/product.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { CategoryService } from '../category/category.service';
import { Category } from '../category/entities/category.entity';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product) private readonly ProductoRepository: Repository<Product>,
    @Inject('CATEGORY_SERVICE') private readonly categoryService: CategoryService
  ){}

  async create({categories, ...createProductDto}: CreateProductDto): Promise<Product> {

    const categoriesEntity: Category[] = [];

    for (const category of categories) {
      const categoryEntity = await this.categoryService.findOneByName(category);

      categoriesEntity.push(categoryEntity);
    }

    const product =this.ProductoRepository.create({...createProductDto, categories: categoriesEntity});

    return await this.ProductoRepository.save(product);

  }

  async findAll() {
    
    const product = await this.ProductoRepository.find();
    
    return product;
  }

  async findOne(id: string) {

    const product = await this.ProductoRepository.findOneByOrFail({id});

    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {

    const product = await this.ProductoRepository.findOneByOrFail({id});
 

    if(product != null){
      Object.assign(product, updateProductDto)
      return await this.ProductoRepository.save(product);
    }else{
      'this register no fount';
    }

    
  }

  async remove(id: string) {
    const product = await this.ProductoRepository.findOneByOrFail({id});

    if(product != null){
      await this.ProductoRepository.softDelete(product.id);
      return `This action removes a #${id} product`;
    } else{
      var mensaje = 'this register no fount';
      return mensaje;
    } 
  }

  async retore(id: string) {

  
    const product = await this.ProductoRepository.findOneByOrFail({id});

    if(product != null){
      await this.ProductoRepository.restore(product.id);
      return `This action removes a #${id} product`;
    } else{
      var mensaje = 'this register no fount';
      return mensaje;
    } 

   
  }

}
