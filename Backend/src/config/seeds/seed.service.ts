import { Injectable, Logger } from "@nestjs/common";
import { UserSeederService } from "./User/userSeeder.service";
import { RoleSeederService } from "./Role/roleSeeder.service";
import { ProductSeederService } from "./Product/productSeeder.service";
import { CategorySeederService } from "./Category/categorySeeder.service";

@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    private readonly userSeederService: UserSeederService,
    private readonly roleSeederService: RoleSeederService,
    private readonly productSeederService: ProductSeederService,
    private readonly categorySeederService: CategorySeederService,
  ) {}
  async seed() {

    await this.role()
      .then(completed => {
        this.logger.debug('Successfuly completed seeding roles...');
        Promise.resolve(completed);
      })
      .catch(error => {
        this.logger.error('Failed seeding roles...');
        Promise.reject(error);
      });

    await this.user()
      .then(completed => {
        this.logger.debug('Successfuly completed seeding users...');
        Promise.resolve(completed);
      })
      .catch(error => {
        this.logger.error('Failed seeding users...');
        Promise.reject(error);
      });

    await this.category()
    .then(completed => {
      this.logger.debug('Successfuly completed seeding categories...');
      Promise.resolve(completed);
    })
    .catch(error => {
      this.logger.error('Failed seeding categories...');
      Promise.reject(error);
    });

    await this.product()
    .then(completed => {
      this.logger.debug('Successfuly completed seeding products...');
      Promise.resolve(completed);
    })
    .catch(error => {
      this.logger.error('Failed seeding products...');
      Promise.reject(error);
    });
  }

  async role(): Promise<void> {
    return await this.roleSeederService.create();
  }

  async user(): Promise<void> {
    return await this.userSeederService.create();
  }

  async category() {
    return await this.categorySeederService.create();
  }

  async product() {
    return await this.productSeederService.create();
  }
}