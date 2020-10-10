<template>
  <div>
      <el-container>
          <el-aside width="200px">
              <!-- Aside content -->
            <el-menu mode="vertical" style="height:100vh" :default-active="$route.path" router>
                <el-submenu v-for="(submenus, index) in menus.menu"
                    :index="index+''"
                    :key="submenus.title">
                    <template slot="title">{{submenus.title}}</template>
                    <el-menu-item v-for="(item, subIndex) in submenus.items"
                        :key="item.title+subIndex"
                        :index="item.path">
                            {{item.title}}
                    </el-menu-item>
                </el-submenu>
            </el-menu>
            
          </el-aside>
          <el-container>
              <el-header height="">
                  <!-- Header content -->
                  <h3>Video-后台管理界面</h3>
              </el-header>
              <el-main height="">
                  <!-- Main content -->
                  <router-view></router-view>
              </el-main>
          </el-container>
      </el-container>
      
  </div>
</template>

<script lang='ts'>
import { Component,Vue } from 'vue-property-decorator';
@Component({})
export default class MainMenu extends Vue {
    menus={
        menu:[
            {
                title:'内容管理',
                items:[
                    {
                        title:'首页',
                        path:'/home'
                    },
                    {
                        title:'视频管理',
                        path:'/vlogscrud/vlog'
                    },
                     {
                        title:'文件管理',
                        path:'/vfilescrud/video'
                    }
                ]
            },
            {
                title:'运营管理',
                items:[
                    {
                        title:'用户管理',
                        path:'/usercurd/user'
                    }
                ]
            }
        ]
    }
}
</script>

<style>

</style>