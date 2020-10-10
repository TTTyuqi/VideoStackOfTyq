import { VflieModel } from '@libs/db/model/vfile.model';
import { VlogModel } from '@libs/db/model/vlog.model';
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class VideosService {
    constructor(
        @InjectModel(VflieModel) private readonly vFileModel:ReturnModelType<typeof VflieModel>,
        @InjectModel(VlogModel) private readonly vlogModel:ReturnModelType<typeof VlogModel>
        ){}

    //查询所有的vFiles
    async getAllFile(query:any):Promise<{}>{
        const where = JSON.parse(query.where)
        const total = await this.vFileModel.find(where).countDocuments()
        const pageSize = Math.ceil(total/query.size)
        const jump = (query.page-1)*query.size
        const data = await this.vFileModel.find(where).skip(jump).limit(Number(query.size)).sort(query.sort)
        return {
            total,
            data,
            pageSize:query.size,
            lastPage:pageSize,
            currentPage:query.page
        }
    }
    //添加
    async createVfileModel(vfile:VflieModel):Promise<any>{
        return await this.vFileModel.create(vfile)
    }

    //删除
    async delVfileById(id:string):Promise<any>{
        return await this.vFileModel.findByIdAndDelete(id)
    }

    //更新
    async updatevFileById(id:string,vfile:VflieModel):Promise<any>{
        return await this.vFileModel.findByIdAndUpdate(id,vfile)
    }

    //获取所有的vlog
    async getAllVlogModel():Promise<any>{
        const vloglist = (await this.vlogModel.find()).map(vlog => {
            return {
                label: vlog.vTitle,
                value: vlog._id
            }
        })
        return vloglist
    }

}
