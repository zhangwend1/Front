<template>
  <div class="container">
    <va-sidebar textColor="dark">
      <va-sidebar-item>
        <router-link active-class="active" to="/Leader/manageTeamInfo/AddLeader">
          <va-sidebar-item-content>
            <va-sidebar-item-title>领队</va-sidebar-item-title>
          </va-sidebar-item-content>
        </router-link>
      </va-sidebar-item>

      <va-sidebar-item>
        <router-link active-class="active" to="/Leader/manageTeamInfo/AddDoctor">
          <va-sidebar-item-content>
            <va-sidebar-item-title>队医</va-sidebar-item-title>
          </va-sidebar-item-content>
        </router-link>
      </va-sidebar-item>

      <va-sidebar-item>
        <router-link active-class="active" to="/Leader/manageTeamInfo/AddAthlete">
          <va-sidebar-item-content>
            <va-sidebar-item-title>运动员</va-sidebar-item-title>
          </va-sidebar-item-content>
        </router-link>
      </va-sidebar-item>

      <va-sidebar-item>
        <router-link active-class="active" to="/Leader/manageTeamInfo/AddCoach">
          <va-sidebar-item-content>
            <va-sidebar-item-title>教练员</va-sidebar-item-title>
          </va-sidebar-item-content>
        </router-link>
      </va-sidebar-item>

      <va-sidebar-item>
        <router-link active-class="active" to="/Leader/manageTeamInfo/AddUmpire">
          <va-sidebar-item-content>
            <va-sidebar-item-title>裁判员</va-sidebar-item-title>
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
  name: "manageTeamInfo",
  components: {
    VaSidebar,
    VaSidebarItem,
    VaSidebarItemContent,
    VaSidebarItemTitle
  },
}
</script>

<style scoped>

</style>