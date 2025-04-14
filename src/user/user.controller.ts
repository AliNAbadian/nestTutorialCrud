import { Body, Controller, Get, Param, Post, Query, Request } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
// import { Request } from 'express';

@Controller('user')
export class UserController {
    @Post()
    async create(@Body() body: CreateUserDto): Promise<string> {
        return `User ${body.name} created with email ${body.email}`;
    }
    
    @Get()
    findAll(): string {
        return 'This action returns all users';
    }
    @Get('one')
    findOne(@Query('age') age: string): string {
        return 'This action returns a user with age ' + age;
    }
    @Get('two')
    findTwo(@Request() req: Request): string {
        return 'This action returns a user';
    }
    @Get('by/:id') 
    async findOneById(@Param() params: any): Promise<string> {
        return 'This action returns a user' + params.id;
    }
}
