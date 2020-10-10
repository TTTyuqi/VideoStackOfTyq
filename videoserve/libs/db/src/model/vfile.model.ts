import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { ModelOptions, prop, Ref } from "@typegoose/typegoose";
import { VlogModel } from "./vlog.model";

@ModelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class VflieModel{
    @ApiProperty({default:'video-name',example:'name1'})
    @prop()
    fName!:string

    @prop({ref:() => VlogModel})
    vId!:Ref<VlogModel>

    @ApiProperty({default:'video-url',example:'xxxx.mp4'})
    @prop()
    fFileUrl!:string
}