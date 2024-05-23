import {
  IsString,
  IsOptional,
  IsNumber,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class UserDetailsDto {
  @IsString()
  firstName: string;

  @IsString()
  @IsOptional()
  DOB?: string;

  @IsString()
  @IsOptional()
  gender?: string;
}

export class UserHobbyDto {
  @IsNumber()
  height: number;

  @IsNumber()
  @IsOptional()
  drinkHabit?: number;

  @IsNumber()
  @IsOptional()
  smokeHabit?: number;

  @IsNumber()
  @IsOptional()
  exerciseHabit?: number;
}

export class UserBioDto {
  @IsString()
  bio: string;

  @IsString()
  @IsOptional()
  describeYourself?: string;
}

export class PostDataDto {
  @IsUUID()
  uuid: string;

  @IsString()
  bio: string;

  @IsString()
  @IsOptional()
  emoji?: string;

  @ValidateNested()
  @Type(() => UserDetailsDto)
  userDetails: UserDetailsDto;

  @ValidateNested()
  @Type(() => UserHobbyDto)
  userHobby: UserHobbyDto;
}
