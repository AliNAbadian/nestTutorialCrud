import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'dto/body.dto';
import { User } from 'interfaces/user.interface';

@Injectable()
export class UserService {
  private readonly users: User[] = [];

  create(createUserDto: CreateUserDto): User {
    const newUser: User = {
      id: this.users.length + 1,
      ...createUserDto
    };
    this.users.push(newUser)
    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }
}
