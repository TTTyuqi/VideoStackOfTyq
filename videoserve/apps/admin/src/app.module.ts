import { DbModule } from '@libs/db';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { VlogsModule } from './vlogs/vlogs.module';

@Module({
  imports: [DbModule,UsersModule, VlogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}