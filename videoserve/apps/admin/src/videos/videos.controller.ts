import CrudFucModel from '@libs/db/model/crudfuc.model';
import { VflieModel } from '@libs/db/model/vfile.model';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { VideosService } from './videos.service';

@ApiTags('视频文件')
@Controller('videos')
export class VideosController {
    constructor(private readonly videosService:VideosService){}

    @ApiOperation({summary:'查询所有视频文件，支持名称的模糊查询'})
    @Get('/video')
    async feachVideos(@Query() query:CrudFucModel):Promise<{}>{
        return await this.videosService.getAllFile(query)
    }

    @ApiOperation({summary:'添加视频文件'})
    @Post('/video')
    async addVideObj(@Body() video:VflieModel):Promise<any>{
        return await this.videosService.createVfileModel(video)
    }

    @ApiOperation({summary:'更新vFlileModel'})
    @Put('/video/:id')
    async modifyVideo(@Param('id') id:string,@Body() video:VflieModel):Promise<any>{
        return await this.videosService.updatevFileById(id,video)
    }

    @ApiOperation({summary:'删除视频文件'})
    @Delete('/video/:id')
    async delVideoById(@Param('id') id:string):Promise<any>{
        return await this.videosService.delVfileById(id)
    }

    @ApiOperation({summary:'获取表头'})
    @Get('/option')
    async getOption():Promise<{}>{
        const vlogs = await this.videosService.getAllVlogModel()
        return {
            index:true,
            indexLabel:'序号',
            align:'center',
            searchMenuSpan:8,
            column:[
                {
                    label:'文件名称',
                    prop:'fName',
                    sortable:true,
                    search:true,
                    regex:true,
                    row:true
                },
                {
                    label:'所属视频',
                    prop:'vId',
                    type: "select",
                    dicData: vlogs,
                    row:true
                },
                {
                    label:'视频文件',
                    prop:'fFileUrl',
                    type: 'upload',
                    accept:"video/mp4",
                    listType: 'picture-img',
                    action: '/upload',
                    width:120,
                    row:true
                }
            ]
        }
    }

    
}
