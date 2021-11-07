import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import User from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private connection: Connection,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.usersRepository.create(createUserDto)
    await this.usersRepository.save(newUser);
    return newUser;
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOneById(id: number) {
    const user = await this.usersRepository.findOne({ id });
    if (user) {
      return user;
    } throw new HttpException(
      'A user with this ID does not exist',
      HttpStatus.NOT_FOUND,
    )
  }

  async findOneByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });
    if (user) {
      return user;
    } throw new HttpException(
      'A user with this email does not exist',
      HttpStatus.NOT_FOUND,
    )
  }
}
