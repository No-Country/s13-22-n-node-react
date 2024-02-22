import { Logger, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Product } from "src/modules/products/entities/product.entity";
import { ProductSeederService } from "./productSeeder.service";

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    providers: [ProductSeederService, Logger],
    exports: [ProductSeederService],
  })
  export class ProductSeederModule {}