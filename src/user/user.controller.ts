import { Body, Controller, Get, Param, Post, Query, Request } from '@nestjs/common';
// import { CreateUserDto } from '../../dto/create-user.dto';
import { UserService } from './user.service';
import { User } from 'interfaces/user.interface';
import { CreateUserDto } from 'dto/create-user.dto';
// import { Request } from 'express';

@Controller('user')
export class UserController {
    constructor(private readonly usersService: UserService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
    // console.log(createUserDto)

        return this.usersService.create(createUserDto);
    }

    @Get()
    findAll(): Promise<User[]> {
        return this.usersService.findAll()
    }
}
 