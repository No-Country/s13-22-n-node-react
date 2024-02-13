import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<string> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });
    await this.userRepository.save(user);
    return `The user ${user.name} ha sido creado con éxito`;
  }

  async findAll() {
    const users = await this.userRepository.find();
    return users;
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOneByOrFail({ id });
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<string> {
    const user = await this.userRepository.findOneByOrFail({ id });
    if (updateUserDto.password) {
      const hashedPassword = await bcrypt.hash(updateUserDto.password, 10);
      updateUserDto.password = hashedPassword;
    }
    Object.assign(user, updateUserDto);
    await this.userRepository.save(user);
    return `El usuario ${user.name} ha sido actualizado con éxito`;
  }

  async remove(id: string) {
    await this.userRepository.softDelete(id);
    return `el Usuario de ${id} Esta Fuera de Linea`;
  }

  async restore(id: string) {
    await this.userRepository.restore(id);
    return `el Usuario de ${id} Esta de nuevo En Linea`;
  }
}
