import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { VERSION } from '../../common/constants';
import { AllExceptionFilter } from '../../common/filter/exception.filter';
import { Auth } from '../../common/decorators/auth.decorator';
import { ERole } from '../../common/enum';



@ApiTags("Orders")
@ApiBearerAuth()
@UseFilters(AllExceptionFilter)
@Auth(ERole.CUSTOMER, ERole.ADMIN)
@Controller(`api/${VERSION}/orders`)
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    ) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {

    return this.ordersService.create(createOrderDto);
  }

  @Get()
  findAll(@Query('limit') limit: number, @Query('offset') offset: number) {
    return this.ordersService.findAll({ limit, offset });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}
