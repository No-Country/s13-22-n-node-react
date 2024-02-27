import { Logger, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Seeder } from "./seed.service";
import dataSourceOptions from "./db/database.seed";
import { UserSeederModule } from "./User/userSeeder.module";
import { RoleSeederModule } from "./Role/roleSeeder.module";
import { CategorySeederModule } from "./Category/categorySeeder.module";
import { ProductSeederModule } from "./Product/productSeeder.module";

@Module({
    imports: [
      TypeOrmModule.forRoot(dataSourceOptions),
      UserSeederModule,
      RoleSeederModule,
      CategorySeederModule,
      ProductSeederModule,
    ],
    providers: [
      Logger, 
      Seeder,
    ],
  })
  export class SeederModule {}