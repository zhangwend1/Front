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
    <br><br>
    队医：
    <br>
    姓名：{{doctor.name}}
    <br>
    身份证号：{{doctor.identityCard}}
    <br>
    电话号码：{{doctor.phoneNumber}}
    <br><br>
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
        {{'"'+attr+'"'}}
      </template>
      <br>
    </div>
    <br><br>
    教练员：
    <br>
      姓名：{{coach.name}}
      <br>
      性别：{{coach.gender}}
      <br>
      身份证号：{{coach.identityCard}}
      <br>
      电话号码：{{coach.phoneNumber}}
    <br><br>
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
      doctor:{
        name:'',
        identityCard:'',
        phoneNumber:''
      },
      athlete:[],
      coach:{
        name:'',
        gender:'',
        identityCard:'',
        phoneNumber:''
      },
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
    axios.get("/coach/selectByTeam", {
      params: {
        teamId: this.$store.state.thisTeam.nowTeamID
      }
    }).then(response => {
      this.coach.name=response.data.name;
      this.coach.phoneNumber=response.data.phone;
      this.coach.identityCard=response.data.idNumber;
      this.coach.gender=response.data.sex;
    }).catch(err => {
    })
    axios.get("/doctor/selectByTeam", {
      params: {
        teamId: this.$store.state.thisTeam.nowTeamID
      }
    }).then(response => {
      this.doctor.name=response.data.name;
      this.doctor.phoneNumber=response.data.phone;
      this.doctor.identityCard=response.data.idNumber;
    }).catch(err => {
    })
    axios.get("/athlete/selectByTeam", {
      params: {
        teamId: this.$store.state.thisTeam.nowTeamID
      }
    }).then(response => {
      console.log(response);

      for(let i=0;i<response.data.length;i++){

        // this.athlete[i].name=response.data[i].athlete.name;
        // this.athlete[i].identityCard=response.data[i].athlete.idNumber;
        // this.athlete[i].age=response.data[i].athlete.age;
        // this.athlete[i].gender=response.data[i].athlete.sex;
        // for(let j=0;j<response.data[i].events.length;i++){
        //   this.athlete[i].match[j]=response.data[i].events.name;
        // }
        let thisMatch=[];
        for(let j=0;j<response.data[i].events.length;j++){
          thisMatch[j]=response.data[i].events[j].name;
        }
        this.athlete[i]={
          name:response.data[i].athlete.name,
          identityCard:response.data[i].athlete.idNumber,
          age:response.data[i].athlete.age,
          gender:response.data[i].athlete.sex,
          match:thisMatch
        }
      }
    }).catch(err => {
    })
  },
  methods:{



  }

}
</script>

<style scoped>

</style>