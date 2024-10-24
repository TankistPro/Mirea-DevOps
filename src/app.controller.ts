import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './Entities/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsersList(): Promise<User[]> {
    return this.appService.getAll();
  }
}
