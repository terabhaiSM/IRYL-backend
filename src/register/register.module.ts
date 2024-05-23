import { Module } from '@nestjs/common';
import { RegisterController } from './register/register.controller';
import { RegisterService } from './register/register.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterEntity } from './entity/register.entity/register.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RegisterEntity])],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}
