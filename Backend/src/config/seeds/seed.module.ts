import { Logger, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Seeder } from "./seed.service";
import dataSourceOptions from "./db/database.seed";
import { UserSeederModule } from "./User/userSeeder.module";
import { RoleSeederModule } from "./Role/roleSeeder.module";
import { CategorySeederModule } from "./Category/categorySeeder.module";

@Module({
    imports: [
      TypeOrmModule.forRoot(dataSourceOptions),
      UserSeederModule,
      RoleSeederModule,
      CategorySeederModule,
    ],
    providers: [
      Logger, 
      Seeder,
    ],
  })
  export class SeederModule {}