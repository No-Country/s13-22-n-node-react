import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Body, Patch, Param, Delete, UseFilters } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { VERSION } from '../../common/constants';
import { AllExceptionFilter } from '../../common/filter/exception.filter';
import { Auth } from '../../common/decorators/auth.decorator';
import { ERole } from '../../common/enum';

@ApiTags("Delivery")
@ApiBearerAuth()
@UseFilters(AllExceptionFilter)
@Auth(ERole.CUSTOMER, ERole.ADMIN)
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

    return this.deliveryService.update(id, updateDeliveryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliveryService.remove(+id);
  }
}
