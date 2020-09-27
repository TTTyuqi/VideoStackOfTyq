import { DbModule } from '@libs/db';
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { VlogsModule } from './vlogs/vlogs.module';

const MAO = require('multer-aliyun-oss');
@Module({
  imports: [
    MulterModule.register({
      storage: MAO({
        config: {
            region: 'oss-cn-hangzhou',
            accessKeyId: 'LTAI4G3uzQd9UcoLV9jWYNPj',
            accessKeySecret: 'owTKO7qwKUkzHAlFfH9eK2w0oLakGU',
            bucket: 'videotyuqi'
        }
      })
      // dest: 'upload',
    }),
    DbModule,
    UsersModule, 
    VlogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
