import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './Entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ){}

  getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  getById(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }
}
