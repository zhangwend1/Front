<template>
  <div style="margin-left: 10px; margin-bottom: 10px; margin-top: 10px; display: flex">
    <va-popover
        placement="right"
        message="孙政，张文迪，罗承宗"
    >
      <va-button>小组成员</va-button>
    </va-popover>
    <div style="margin-left: 500px; font-size: 30px">
      体操赛事信息管理系统
    </div>
  </div>
  <div class="container">
    <va-sidebar class="side-bar" textColor="dark">
      <va-sidebar-item>
        <router-link active-class="active" to="/Admin/Teams">
          <va-sidebar-item-content>
            <va-sidebar-item-title> 代表队管理</va-sidebar-item-title>
          </va-sidebar-item-content>
        </router-link>
      </va-sidebar-item>


      <va-sidebar-item @click="test()">
        <router-link active-class="active" to="/Admin/Matches">
          <va-sidebar-item-content>
            <va-sidebar-item-title> 赛事管理</va-sidebar-item-title>
          </va-sidebar-item-content>
        </router-link>
      </va-sidebar-item>
    </va-sidebar>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import {VaSidebar} from "vuestic-ui";
import {VaSidebarItem} from "vuestic-ui";
import {VaSidebarItemContent} from "vuestic-ui";
import {VaSidebarItemTitle} from "vuestic-ui";

export default {
  name: "Admin",
  components: {
    VaSidebar,
    VaSidebarItem,
    VaSidebarItemContent,
    VaSidebarItemTitle
  },
  data() {
    return {}
  },
  methods: {}

}
</script>

<style scoped>
.container {
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
}

.side-bar {

}

.view {
  flex: 1 1 auto;
}
</style>