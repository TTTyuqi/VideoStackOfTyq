import { VflieModel } from '@libs/db/model/vfile.model';
import { VlogModel } from '@libs/db/model/vlog.model';
import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { VideosController } from './videos.controller';
import { VideosService } from './videos.service';

@Module({
  imports:[TypegooseModule.forFeature([VflieModel,VlogModel])],
  controllers: [VideosController],
  providers: [VideosService]
})
export class VideosModule {}
