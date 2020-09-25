## Nestjs ==> MongoDB 连接方式
> 连接库
```
npm i -save nestjs-typegoose
```
> mongose模型定义库
```
npm i -save @typegoose/typegoose
```
> mongose 提示库
```
npm i -save mongoose @types/mongoose 
```
## 使用swagger编写后台文档API
```
npm install --save @nestjs/swagger swagger-ui-express
```
## 本机连接mongodb数据库 
> 到mongodb安装路径的bin目录下 执行命令
```
./mongod -f mongodb.conf
./mongo
```
## mac中查看端口占有情况
> 查看 termianal命令
```
lsof -i:端口号
```
> kill -9 Pid 杀死进程
