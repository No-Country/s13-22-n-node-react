import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { VERSION } from 'src/common/constants';
import { Auth } from 'src/common/decorators/auth.decorator';
import { ERole } from 'src/common/enum';
import { AllExceptionFilter } from 'src/common/filter/exception.filter';




@ApiTags('Products')
@UseFilters(AllExceptionFilter)
@Controller(`api/${VERSION}/products`)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Auth(ERole.ADMIN)
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Auth(ERole.ADMIN, ERole.CUSTOMER)
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Auth(ERole.ADMIN, ERole.CUSTOMER)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Auth(ERole.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Auth(ERole.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }

  @Auth(ERole.ADMIN)
  @Patch(':id')
  restore(@Param('id') id: string) {
    return this.productsService.retore(id);
  }
}
