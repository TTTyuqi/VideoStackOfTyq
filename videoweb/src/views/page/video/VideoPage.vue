<template>
  <div>
    <avue-crud
      v-if="option"
      :data="tabledata" 
      :option="option"
      :table-loading="loading"
      :page.sync="page"
      @on-load="onLoad"
      @row-save="saveData"
      @row-update="updateData"
      @row-del="delData"
      @sort-change="sortChange"
      @search-change="searchChange"
      >
    </avue-crud>
  </div>
</template>

<script lang='ts'>
import { Component,Vue } from "vue-property-decorator";
import  crudmixin  from '../../../mixin/crudmixin'
@Component({
    mixins:[crudmixin]
})
export default class VideoPage extends Vue {
}
</script>

<style>

</style>