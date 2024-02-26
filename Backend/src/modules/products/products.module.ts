import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './entities/product.entity';
import { Category } from '../category/entities/category.entity';
import { Image } from './entities/image.entity';
import { CategoryService } from '../category/category.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, Image, Category])
  ],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    {
      provide: 'CATEGORY_SERVICE',
      useClass: CategoryService,
    }
  ],
})
export class ProductsModule {}
