import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './entities/product.entity';
import { category } from '../category/entities/category.entity';
import { Image } from './entities/image.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, Image])
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
