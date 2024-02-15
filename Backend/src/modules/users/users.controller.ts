import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/common/decorators/auth.decorator';
import { ERole } from 'src/common/enum';
import { AllExceptionFilter } from 'src/common/filter/exception.filter';

@ApiTags('Users')
@ApiBearerAuth()
@UseFilters(AllExceptionFilter)
@Controller('api/v1/users')
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
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Auth(ERole.ADMIN, ERole.CUSTOMER)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Auth(ERole.ADMIN, ERole.CUSTOMER)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @Auth(ERole.ADMIN)
  @Patch('/restore/:id')
  restore(@Param('id') id: string) {
    return this.usersService.restore(id);
  }
}
