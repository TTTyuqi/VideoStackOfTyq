import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { DbService } from './db.service';

@Module({
  //连接mongoDB数据库
  imports:[TypegooseModule.forRootAsync(
    {
      useFactory(){
        return{
          uri:process.env.DATABASE_URL,
          useNewUrlParser:true,
          useCreateIndex:true,
          useFindAndModify:false,
          useUnifiedTopology:true
        }
      }
    }
    // process.env.DATABASE_URL,
    // {
    //   useNewUrlParser:true,
    //   useCreateIndex:true,
    //   useFindAndModify:false,
    //   useUnifiedTopology:true
    // },
  ),
],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule {}
