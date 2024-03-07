import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters, ParseUUIDPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Auth } from '../../common/decorators/auth.decorator';
import { ERole } from '../../common/enum';
import { AllExceptionFilter } from '../../common/filter/exception.filter';
import { VERSION } from '../../common/constants';

@ApiTags('Users')
@ApiBearerAuth()
@UseFilters(AllExceptionFilter)
@Controller(`api/${VERSION}/users`)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Auth(ERole.ADMIN, ERole.CUSTOMER)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  
  @Auth(ERole.ADMIN, ERole.CUSTOMER)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Auth(ERole.ADMIN, ERole.CUSTOMER)
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.findOne(id);
  }

  @Auth(ERole.ADMIN, ERole.CUSTOMER)
  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Auth(ERole.ADMIN, ERole.CUSTOMER)
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.remove(id);
  }

  @Auth(ERole.ADMIN)
  @Patch('/restore/:id')
  restore(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.restore(id);
  }
}
