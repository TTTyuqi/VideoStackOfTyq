import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { DbService } from './db.service';
import { UserModel } from './model/user.model';
import { VflieModel } from './model/vfile.model';
import { VlogModel } from './model/vlog.model';

@Module({
  //连接mongoDB数据库
  imports:[TypegooseModule.forRoot('mongodb://localhost:27017/vlogeData',
    {
      useNewUrlParser:true,
      useCreateIndex:true,
      useFindAndModify:false,
      useUnifiedTopology:true
    },
  ),
  TypegooseModule.forFeature([UserModel,VlogModel,VflieModel])
],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule {}
