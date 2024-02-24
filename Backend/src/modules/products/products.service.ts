import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import{Product} from './entities/product.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { promises } from 'dns';
import { PaginationDto } from 'src/common/dto/pagination.dto';





@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product) private readonly ProductoRepository: Repository<Product>
  ){}

  async create(createProductDto: CreateProductDto): Promise<Product> {

    const product =this.ProductoRepository.create(createProductDto);

    return await this.ProductoRepository.save(product);

  }

  async findAll({ limit=20, offset=0 }: PaginationDto) {
    
    const product = await this.ProductoRepository.find({
      take:limit,
      skip:offset
    });
    
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
