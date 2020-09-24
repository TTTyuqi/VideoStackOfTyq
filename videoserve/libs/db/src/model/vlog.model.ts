import { ApiProperty } from "@nestjs/swagger";
import { ModelOptions, prop, Ref } from "@typegoose/typegoose";
import { VflieModel } from "./vfile.model";

@ModelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class VlogModel{

    @ApiProperty({default:'标题',example:'v-title'})
    @prop()
    vTitle!:string

    @ApiProperty({default:'用户🆔',example:'1111111'})
    @prop()
    vUserId!:string

    @ApiProperty({default:'img-url',example:'xxxx.png'})
    @prop()
    vBgimg?:string


    @prop({Ref:() => [VflieModel]})
    vContent?:Ref<VflieModel>[]
}