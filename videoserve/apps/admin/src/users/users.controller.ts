import CrudFucModel from '@libs/db/model/crudfuc.model';
import { UserModel } from '@libs/db/model/user.model';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { promises } from 'dns';
import { UsersService } from './users.service';

@ApiTags('用户模块')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

    @ApiOperation({summary:'获取所有用户'})
    @Get('/user')
    async usersList(@Query() query:CrudFucModel):Promise<{}>{
        return await this.usersService.allUser(query)
    }

    @ApiOperation({summary:'根据Id查询用户'})
    @Get('/user/:id')
    async feachUser(@Param('id') id:string):Promise<UserModel>{
        return await this.usersService.feachUserById(id)
    }

    @ApiOperation({summary:'根据Id更新用户'})
    @Put('/user/:id')
    async updateUser(@Param('id') id:string,@Body() user:UserModel):Promise<any>{
        return await this.usersService.updateUserById(id,user)
    }

    @ApiOperation({summary:'根据🆔删除用户'})
    @Delete('/user/:id')
    async delUser(@Param('id') id:string):Promise<any>{
        return await this.usersService.deletUserId(id)
    }

    @ApiOperation({summary:'组册用户'})
    @Post('/user')
    async addUser(@Body() user:UserModel):Promise<any>{
        return await this.usersService.createUser(user)
    }

    @Get('/option')
    getOption():{}{
        return{
            index:true,
            indexLabel:'序号',
            align:'center',
            searchMenuSpan:8,
            column:[
                {
                    label:'用户名称',
                    prop:'userName',
                    sortable:true,
                    search:true,
                    regex:true,
                },
                {
                    label:'密码',
                    prop:'passWord'
                }
            ]
        }
    }
}
