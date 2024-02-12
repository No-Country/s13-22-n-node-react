import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository:Repository<User>){}

  async create(createUserDto: CreateUserDto): Promise<string> {
    try {
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
      const user = this.userRepository.create({
        ...createUserDto,
        password: hashedPassword,
      })
      await this.userRepository.save(user)

      console.log(user);
      return `The user ${user.name} ha sido creado con éxito`;
    } catch (error) {
      return error.message;
    }
  }

  async findAll() {
    try {
      const users = await this.userRepository.find();
      return users;
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.userRepository.findOneByOrFail({ id });
      return user;
    } catch (error) {
      return error.message;
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<string> {
    try {
      const user = await this.userRepository.findOneByOrFail({ id });

      if (!user) throw new Error(`Usuario con id ${id} no encontrado`);
      if (updateUserDto.password) {
        const hashedPassword = await bcrypt.hash(updateUserDto.password, 10);
        updateUserDto.password = hashedPassword;
      }

      Object.assign(user, updateUserDto);
      await this.userRepository.save(user)

      return `El usuario ${user.name} ha sido actualizado con éxito`;
    } catch (error) {
      return error.message;
    }
  }

  async remove(id: string) {
    try {
      const user = await this.userRepository.findOneBy({ id });

      if (!user) throw new Error(`Usuario con id ${id} no encontrado`);
      user.isActive = false;
      await this.userRepository.softDelete(id)

      return `el Usuario de ${id} Esta Fuera de Linea`;
    } catch (error) {
      return error.message;
    }
  }
}