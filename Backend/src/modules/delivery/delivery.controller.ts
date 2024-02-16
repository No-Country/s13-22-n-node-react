import { Controller, Get, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { ApiTags } from '@nestjs/swagger';
import { VERSION } from 'src/common/constants';

@ApiTags("Delivery")
@Controller(`api/${VERSION}/delivery`)
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Get()
  findAll() {
    return this.deliveryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliveryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeliveryDto: UpdateDeliveryDto) {
    return this.deliveryService.update(+id, updateDeliveryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliveryService.remove(+id);
  }
}
