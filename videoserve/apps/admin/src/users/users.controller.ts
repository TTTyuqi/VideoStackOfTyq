import { UserModel } from '@libs/db/model/user.model';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

@ApiTags('用户模块')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

    @ApiOperation({summary:'获取所有用户'})
    @Get('/all')
    async usersList():Promise<UserModel[]>{
        return await this.usersService.allUser()
    }

    @ApiOperation({summary:'根据Id查询用户'})
    @Get('/one/:id')
    async feachUser(@Param('id') id:string):Promise<UserModel>{
        return await this.usersService.feachUserById(id)
    }

    @ApiOperation({summary:'根据Id更新用户'})
    @Put('/update/:id')
    async updateUser(@Param('id') id:string,@Body() user:UserModel):Promise<any>{
        return await this.usersService.updateUserById(id,user)
    }

    @ApiOperation({summary:'根据🆔删除用户'})
    @Delete('/del/:id')
    async delUser(@Param('id') id:string):Promise<any>{
        return await this.usersService.deletUserId(id)
    }

    @ApiOperation({summary:'组册用户'})
    @Post('/resgist')
    async addUser(@Body() user:UserModel):Promise<any>{
        return await this.usersService.createUser(user)
    }
}
