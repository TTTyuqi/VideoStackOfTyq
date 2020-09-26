import { Component,Prop,Vue } from 'vue-property-decorator';
import {createDataObj, deleDataObj, getDataList, getOption, modifyDataObj} from '../api/commonapi'
@Component({})
export default class crudmixin extends Vue{
    @Prop() urlpath!:string
    loading=false
    tabledata=[]
    option={}
    page={
        total:0,
        currentPage: 1,
        pageSize: 10,
        pageSizes:[10,20,30,40],
        layout:'sizes, prev, pager, next,total'
    }
    query={
        size:10,
        page:1,
        sort:{},
        where:{}
    }
    //查询
    searchChange(params,done){
        // console.log("===",params)
        if(params.userName){
            params.userName = {$regex:params.userName}
        }
        if(params.vTitle){
            params.vTitle = {$regex:params.vTitle}
        }
        this.query.where = params
        this.feachData()
        done();
    }
    //排序
    sortChange({order,prop}){
        // console.log("val",order)
        if(order){
            this.query.sort = {
                [prop]: order =='ascending'?1:-1
            }  
        }else{
            this.query.sort = {}
        }
        this.feachData()
    }
    //获取clomns
    async loadOption():Promise<void>{
        this.option = await getOption(`/${this.urlpath}s/option`)
    }
    //分页功能
    onLoad(page):void{
        this.query.size = page.pageSize
        this.query.page = page.currentPage
        this.feachData()
    }
    //获取tableData列表
    async feachData(){
        this.loading =true
        const res = await getDataList(`/${this.urlpath}s/${this.urlpath}`,this.query)
        this.tabledata = res.data
        this.page.total = res.total
        this.page.currentPage = res.currentPage
        this.page.pageSize = res.pageSize
        this.loading = false
        // console.log("===",res)
    }
    //新增tableData
    async saveData(row,done){
        await createDataObj(`/${this.urlpath}s/${this.urlpath}`,row)
        this.feachData()
        done()
        this.$message.success('添加成功')
    }
    //修改
    async updateData(row,index,done){
        const data = JSON.parse(JSON.stringify(row))
        delete data.$index
        const req= await modifyDataObj(`/${this.urlpath}s/${this.urlpath}/${data._id}`,data)
        this.feachData()
        done()
        this.$message.success("修改成功")
    }
    //删除
    async delData(row){
        try{
            await this.$confirm('是否确认删除？')
        }catch(e){
            return
        }
        const req = await deleDataObj(`/${this.urlpath}s/${this.urlpath}/${row._id}`)
        this.feachData()
        this.$message.success("删除成功")
    }
    created ():void {
        this.loadOption()
    }
}