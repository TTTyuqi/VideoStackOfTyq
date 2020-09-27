import { DbModule } from '@libs/db';
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { VlogsModule } from './vlogs/vlogs.module';

@Module({
  imports: [
    MulterModule.register({
      dest: 'upload',
    }),
    DbModule,
    UsersModule, 
    VlogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
