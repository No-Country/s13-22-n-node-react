import { Logger, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductSeederService } from "./productSeeder.service";
import { Product } from "../../../modules/products/entities/product.entity";
import { Category } from "../../../modules/category/entities/category.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Product, Category])],
    providers: [ProductSeederService, Logger],
    exports: [ProductSeederService],
  })
  export class ProductSeederModule {}