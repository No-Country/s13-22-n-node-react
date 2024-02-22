import { Injectable, Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import * as bcrypt from "bcrypt";

import { User } from "../../../modules/users/entities/user.entity";
import { users } from "../../../common/utils/factories/user.factory";

@Injectable()
export class UserSeederService {
  constructor(
    private readonly logger: Logger,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async create(): Promise<void> {
    let usersEntities: User[] = [];

    for (const { password, ...user } of users) {
      const userFound = await this.userRepository.findOne({
        where: { email: user.email },
      });

      this.logger.log(userFound);

      if (userFound) continue;

      let hashedPassword = null;

      if (password) {
        hashedPassword = await bcrypt.hash(password, 10);
      }

      const userToCreate = this.userRepository.create({
        ...user,
        password: hashedPassword,
      });

      const userCreated = await this.userRepository.save(userToCreate);

      usersEntities.push(userCreated);
    }

    return;
  }
}
