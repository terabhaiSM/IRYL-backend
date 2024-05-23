import { Injectable } from '@nestjs/common';
import { PostDataDto } from '../dto/register.dto/register.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterEntity } from '../entity/register.entity/register.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(RegisterEntity)
    private registerRepository: Repository<RegisterEntity>,
  ) {}
  async createUser(data: PostDataDto): Promise<PostDataDto> {
    let registerEntity = new RegisterEntity();
    registerEntity.bio = data.bio;
    registerEntity.emoji = data.emoji;
    registerEntity.DOB = data.userDetails.DOB;
    registerEntity.firstName = data.userDetails.firstName;
    registerEntity.gender = data.userDetails.gender;
    registerEntity.height = data.userHobby.height;
    registerEntity.drinkHabit = data.userHobby.drinkHabit;
    registerEntity.smokeHabit = data.userHobby.smokeHabit;
    registerEntity.exerciseHabit = data.userHobby.exerciseHabit;
    registerEntity = await this.registerRepository.save(registerEntity);
    registerEntity.uuid = data.uuid;
    return data;
  }
}
