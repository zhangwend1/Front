<template>
  <div style="margin-left: 10px; margin-bottom: 10px; margin-top: 10px; display: flex">
    <va-popover
        message="孙政，张文迪，罗承宗"
        placement="right"
    >
      <va-button>小组成员</va-button>
    </va-popover>
    <div style="margin-left: 500px; font-size: 30px">
      体操赛事信息管理系统
    </div>
  </div>
  <div class="container">
    <va-sidebar textColor="dark">
      <va-sidebar-item>
        <router-link active-class="active" to="/Leader/teamMessage">
          <va-sidebar-item-content>
            <va-sidebar-item-title>队伍信息</va-sidebar-item-title>
          </va-sidebar-item-content>
        </router-link>
      </va-sidebar-item>

      <va-sidebar-item>
        <router-link active-class="active" to="/Leader/manageTeamInfo">
          <va-sidebar-item-content>
            <va-sidebar-item-title>编辑队伍</va-sidebar-item-title>
          </va-sidebar-item-content>
        </router-link>
      </va-sidebar-item>
    </va-sidebar>
    <div style="margin-left: 5px">
      <router-view class="view"></router-view>
    </div>
  </div>
</template>

<script>
import {VaSidebar} from "vuestic-ui";
import {VaSidebarItem} from "vuestic-ui";
import {VaSidebarItemContent} from "vuestic-ui";
import {VaSidebarItemTitle} from "vuestic-ui";

export default {
  name: "Leader",
  components: {
    VaSidebar,
    VaSidebarItem,
    VaSidebarItemContent,
    VaSidebarItemTitle
  },
}
</script>

<style scoped>
.container {
  display: flex;
}


.view {
  flex: 1 1 auto;
}
</style>