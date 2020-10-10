import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { VlogsModule } from './vlogs/vlogs.module';
import { VideosModule } from './videos/videos.module';
import { EnvconfigModule } from '@libs/envconfig';

const MAO = require('multer-aliyun-oss');
@Module({
  imports: [
    EnvconfigModule,
    MulterModule.registerAsync({
      useFactory(){
        return {
          storage: MAO({
          config: {
              region: process.env.OSS_ALI_REGION,
              accessKeyId: process.env.OSS_ALI_ACCESS_KEY_ID,
              accessKeySecret: process.env.OSS_ALIACCESS_KEY_SECRET,
              bucket: process.env.OSS_ALI_BUCKET,
          }
      })
        }
      }
    }),
    UsersModule, 
    VlogsModule, 
    VideosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
