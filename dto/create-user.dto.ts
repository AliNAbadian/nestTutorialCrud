import { Type } from 'class-transformer';
import { IsString, IsInt, IsNotEmpty, Min, IsEmail, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

 
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional() // Makes this field optional
  bio?: string;
}