import { UserModel } from '@libs/db/model/user.model';
import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports:[TypegooseModule.forFeature([UserModel])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
