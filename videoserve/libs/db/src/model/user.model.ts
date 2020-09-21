import { ApiProperty } from "@nestjs/swagger";
import { ModelOptions, prop } from "@typegoose/typegoose";

@ModelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class UserModel{

    @ApiProperty({default:'用户名',example:'user1'})
    @prop()
    userName!:string

    @ApiProperty({default:'密码',example:'pwd1'})
    @prop()
    passWord!:string
}