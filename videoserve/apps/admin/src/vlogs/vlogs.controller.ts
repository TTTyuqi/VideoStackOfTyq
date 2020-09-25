import CrudFucModel from '@libs/db/model/crudfuc.model';
import { VlogModel } from '@libs/db/model/vlog.model';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { VlogsService } from './vlogs.service';

@ApiTags('视频相关')
@Controller('vlogs')
export class VlogsController {
    constructor(private readonly vlogServices:VlogsService){}

    @ApiOperation({summary:'查询所有视频，支持名称的模糊查询'})
    @Get('/vlog')
    async getAllVlog(@Query() query:CrudFucModel):Promise<{}>{
        return await this.vlogServices.vlogList(query)
    }

    @ApiOperation({summary:'根据id查询'})
    @Get('/vlog/:id')
    async feachById(@Param('id') id:string):Promise<VlogModel>{
        return await this.vlogServices.feachVlogById(id)
    }

    @ApiOperation({summary:'更新vlog'})
    @Put('/vlog')
    async updateById(@Param('id') id:string,@Body() vlog:VlogModel):Promise<any>{
        return await this.vlogServices.modifyVlogById(id,vlog)
    }

    @ApiOperation({summary:'添加视频'})
    @Post('/vlog')
    async addVlog(@Body() vlog:VlogModel):Promise<any>{
        return await this.vlogServices.createVlog(vlog)
    }

    @ApiOperation({summary:'删除视频'})
    @Delete('/vlog/:id')
    async delVlog(@Param('id') id:string):Promise<any>{
        return await this.vlogServices.delVlogById(id)
    }
}
