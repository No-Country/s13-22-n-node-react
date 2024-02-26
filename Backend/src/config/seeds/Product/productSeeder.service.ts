import { Injectable, Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

import { products } from "../../../common/utils/factories/product.factory";
import { Product } from "../../../modules/products/entities/product.entity";
import { Category } from "../../../modules/category/entities/category.entity";

@Injectable()
export class ProductSeederService {
  constructor(
    private readonly logger: Logger,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(): Promise<void> {
    let productEntities: Product[] = [];


    for (const product of products) {

        const categories = await Promise.all(product.categories.map(async (category) => {
            return await this.categoryRepository.findOne({
            where: {
                name: category
            }
        })}));

      const productToCreate = this.productRepository.create({ ...product, categories});

      const productCreated = await this.productRepository.save(productToCreate);

      productEntities.push(productCreated);

    }

    return;
  }
}