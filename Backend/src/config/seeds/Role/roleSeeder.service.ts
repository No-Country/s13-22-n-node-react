import { Injectable, Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

import { Role } from "../../../modules/auth/entities/role.entity";
import { roles } from "../../../common/utils/factories/role.factory";


@Injectable()
export class RoleSeederService {
  constructor(
    private readonly logger: Logger,
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>
  ) {}

  async create(): Promise<void> {
    let roleEntities: Role[] = [];

    for (const role of roles) {
      const roleFound = await this.roleRepository.findOne({
        where: { name: role.name },
      });

      this.logger.log(roleFound);

      if (roleFound) continue;

      const roleToCreate = this.roleRepository.create(role);

      const roleCreated = await this.roleRepository.save(roleToCreate);

      roleEntities.push(roleCreated);
    }

    return;
  }
}
