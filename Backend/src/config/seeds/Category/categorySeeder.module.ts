import { Logger, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { CategorySeederService } from "./categorySeeder.service";
import { Category } from "../../../modules/category/entities/category.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Category])],
    providers: [CategorySeederService, Logger],
    exports: [CategorySeederService],
  })
  export class CategorySeederModule {}