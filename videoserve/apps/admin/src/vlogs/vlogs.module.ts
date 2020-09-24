import { VlogModel } from '@libs/db/model/vlog.model';
import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { VlogsController } from './vlogs.controller';
import { VlogsService } from './vlogs.service';

@Module({
  imports:[TypegooseModule.forFeature([VlogModel])],
  controllers: [VlogsController],
  providers: [VlogsService]
})
export class VlogsModule {}
