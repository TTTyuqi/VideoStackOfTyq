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
    async vlogList(query:any):Promise<{}>{
        const where = JSON.parse(query.where)
        const total = await this.vlogModel.find(where).countDocuments()
        const pageSize = Math.ceil(total/query.size)
        const jump = (query.page-1)*query.size
        const data = await this.vlogModel.find(where).skip(jump).limit(Number(query.size)).sort(query.sort)
        return {
            total,
            data,
            pageSize:query.size,
            lastPage:pageSize,
            currentPage:query.page
        }
    }

    //id查询vlog
    async feachVlogById(id:string):Promise<VlogModel>{
        return await this.vlogModel.findById(id)
    }

    
}
