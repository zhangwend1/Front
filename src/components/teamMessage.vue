<template>
  <div>
    {{teamName}}队伍信息
    <br>
    领队：
    <br>
    姓名：{{leader.name}}
    <br>
    身份证号：{{leader.identityCard}}
    <br>
    电话号码：{{leader.phoneNumber}}
    <br>
    运动员：
    <div v-for="item in athlete">
      姓名：{{item.name}}
      <br>
      性别：{{item.gender}}
      <br>
      年龄：{{item.age}}
      <br>
      身份证号：{{item.identityCard}}
      <br>
      比赛项目：
      <template v-for="attr in item.match">
        {{attr}}" "
      </template>
      <br>
    </div>
    <br>
    教练员：
    <div v-for="item in umpire">
      姓名：{{item.name}}
      <br>
      性别：{{item.gender}}
      <br>
      身份证号：{{item.identityCard}}
      <br>
      电话号码：{{item.phoneNumber}}
    </div>
    <br>
    裁判：
    <br>
    姓名：{{umpire.name}}
    <br>
    身份证号：{{umpire.identityCard}}
    <br>
    电话号码：{{umpire.phoneNumber}}
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "teamMessage",
  data(){
    return{
      teamName:'',
      leader:{
        name:'',
        identityCard:'',
        phoneNumber:''
      },
      athlete:[],
      coach:[],
      umpire:{
        name:'',
        identityCard:'',
        phoneNumber:''
      }
    }
  },
  mounted() {
    axios.get("/team/selectTeamById", {
      params: {
        id: this.$store.state.thisTeam.nowTeamID
      }
    }).then(response => {
      this.teamName=response.data.name;
    }).catch(err => {
    })
    axios.get("/leader/selectByTeam", {
      params: {
        teamId: this.$store.state.thisTeam.nowTeamID
      }
    }).then(response => {
      this.leader.name=response.data.name;
      this.leader.phoneNumber=response.data.phone;
      this.leader.identityCard=response.data.idNumber;
    }).catch(err => {
    })
    axios.get("/referee/selectByTeam", {
      params: {
        teamId: this.$store.state.thisTeam.nowTeamID
      }
    }).then(response => {
      this.umpire.name=response.data.name;
      this.umpire.phoneNumber=response.data.phone;
      this.umpire.identityCard=response.data.idNumber;
    }).catch(err => {
    })
  },
  methods:{



  }

}
</script>

<style scoped>

</style>