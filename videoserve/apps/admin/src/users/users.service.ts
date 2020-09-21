import { UserModel } from '@libs/db/model/user.model';
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { promises } from 'dns';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel(UserModel) private readonly userModel:ReturnModelType<typeof UserModel>){}

    //查询所有的用户
    async allUser():Promise<UserModel[]>{
        return await this.userModel.find()
    }

    //创建一个用户
    async createUser(user:UserModel):Promise<any>{
        await this.userModel.create(user)
        return{
            success:'创建成功'
        }
    }

    //删除用户
    async deletUserId(id:string):Promise<any>{
        await this.userModel.findByIdAndDelete(id)
        return{
            success:'删除成功'
        }
    }

    //更新用户信息
    async updateUserById(id:string,user:UserModel):Promise<any>{
        await this.userModel.findByIdAndUpdate(id,user)
        return{
            success:'更新成功'
        }
    }

    //更具id查询用户
    async feachUserById(id:string):Promise<UserModel>{
        return await this.userModel.findById(id)
    }
}
