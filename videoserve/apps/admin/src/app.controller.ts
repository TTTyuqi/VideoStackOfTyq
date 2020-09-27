import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('app默认')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({summary:'app默认接口'})
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiOperation({summary:'上传接口'})
  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile('file') file){
      return file 
      // return {
      //   url:`http://localhost:3000/upload/${file.filename}`
      // }
  }
}
