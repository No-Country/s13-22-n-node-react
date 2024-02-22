import { Logger, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { RoleSeederService } from "./roleSeeder.service";
import { Role } from "../../../modules/auth/entities/role.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Role])],
    providers: [RoleSeederService, Logger],
    exports: [RoleSeederService],
  })
  export class RoleSeederModule {}