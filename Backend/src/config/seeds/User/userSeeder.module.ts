import { Logger, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { User } from "../../../modules/users/entities/user.entity";
import { UserSeederService } from "./userSeeder.service";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserSeederService, Logger],
    exports: [UserSeederService],
  })
  export class UserSeederModule {}