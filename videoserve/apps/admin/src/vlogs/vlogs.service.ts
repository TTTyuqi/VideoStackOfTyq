import { VlogModel } from '@libs/db/model/vlog.model';
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class VlogsService {
    constructor(@InjectModel(VlogModel) private readonly vlogModel:ReturnModelType<typeof VlogModel>){}

    //添加视频
    async createVlog(vlog:VlogModel):Promise<any>{
        return await this.vlogModel.create(vlog)
    }

    //id删除视频
    async delVlogById(id:string):Promise<any>{
        return await this.vlogModel.findByIdAndDelete(id)
    }

    //id更新视频
    async modifyVlogById(id:string,vlog:VlogModel):Promise<any>{
        return await this.vlogModel.findByIdAndUpdate(id,vlog)
    }

    //vlog列表
    async vlogList(page:number,size:number,name?:string):Promise<{}>{
        const total = await this.vlogModel.countDocuments()
        const pageSize = Math.ceil(total/size)
        const jump = (page-1)*size
        const data = await this.vlogModel.find({'vTitle':{$regex:`/${name}/`}}).skip(jump).limit(size)
        return {
            total,
            data,
            pageSize,
            currentPage:page
        }
    }

    //id查询vlog
    async feachVlogById(id:string):Promise<VlogModel>{
        return await this.vlogModel.findById(id)
    }

    
}
