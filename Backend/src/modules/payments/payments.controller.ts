import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
} from "@nestjs/common";
import { PaymentsService } from "./payments.service";
import { CreatePaymentDto } from "./dto/create-payment.dto";
import { UpdatePaymentDto } from "./dto/update-payment.dto";
import { VERSION } from "src/common/constants";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AllExceptionFilter } from "src/common/filter/exception.filter";
import { Auth } from "src/common/decorators/auth.decorator";
import { ERole } from "src/common/enum";

@ApiTags("Payments")
@ApiBearerAuth()
@UseFilters(AllExceptionFilter)
@Controller(`api/${VERSION}/payments`)
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  //@Auth(ERole.CUSTOMER, ERole.ADMIN)
  @Post()
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentsService.create(createPaymentDto);
  }

  //@Auth(ERole.CUSTOMER, ERole.ADMIN)
  @Get()
  findAll() {
    return this.paymentsService.findAll();
  }

  @Auth(ERole.CUSTOMER, ERole.ADMIN)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.paymentsService.findOne(+id);
  }

  @Auth(ERole.ADMIN)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.paymentsService.update(+id, updatePaymentDto);
  }

  @Auth(ERole.ADMIN)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.paymentsService.remove(+id);
  }
}
