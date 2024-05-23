import { Controller, Post, Body } from '@nestjs/common';
import { PostDataDto } from '../dto/register.dto/register.dto';
import { RegisterService } from './register.service';
@Controller('register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}
  @Post()
  create(@Body() data: PostDataDto): Promise<PostDataDto> {
    return this.registerService.createUser(data);
  }
}
