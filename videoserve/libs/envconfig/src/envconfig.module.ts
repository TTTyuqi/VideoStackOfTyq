import { Module } from '@nestjs/common';
import { EnvconfigService } from './envconfig.service';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from '@libs/db';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
    }),
    DbModule
],
  providers: [EnvconfigService],
  exports: [EnvconfigService],
})
export class EnvconfigModule {}
