import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { ModelOptions, prop } from "@typegoose/typegoose";

@ModelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class VflieModel{
    @ApiProperty({default:'video-name',example:'name1'})
    @prop()
    fName!:string

    @ApiProperty({default:'video-url',example:'xxxx.mp4'})
    @prop()
    fFileUrl!:string
}