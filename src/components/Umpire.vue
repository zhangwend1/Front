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

</template>

<script>
import {VaSidebar} from "vuestic-ui";
import {VaSidebarItem} from "vuestic-ui";
import {VaSidebarItemContent} from "vuestic-ui";
import {VaSidebarItemTitle} from "vuestic-ui";
export default {
  name: "Umpire",
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