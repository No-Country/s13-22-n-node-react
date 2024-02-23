import { Injectable, Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

import { Category } from "../../../modules/category/entities/category.entity";
import { categories } from "src/common/utils/factories/category.factory";

@Injectable()
export class CategorySeederService {
  constructor(
    private readonly logger: Logger,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ) {}

  async create(): Promise<void> {
    let categoryEntities: Category[] = [];

    for (const category of categories) {
      const categoryFound = await this.categoryRepository.findOne({
        where: { name: category.name },
      });

      this.logger.log(categoryFound);

      if (categoryFound) continue;

      const categoryToCreate = this.categoryRepository.create(category);

      const categoryCreated = await this.categoryRepository.save(categoryToCreate);

      categoryEntities.push(categoryCreated);
    }

    return;
  }
}