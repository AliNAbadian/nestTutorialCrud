import { Body, Controller, Get, Param, Post, Query, Request } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UserService } from './user.service';
import { User } from 'interfaces/user.interface';
// import { Request } from 'express';

@Controller('user')
export class UserController {
    constructor(private readonly usersService: UserService) {}

    @Post()
    create(@Body() CreateUserDto: CreateUserDto): User {
        return this.usersService.create(CreateUserDto);
    }

    @Get()
    findAll(): User[] {
        return this.usersService.findAll()
    }
}
