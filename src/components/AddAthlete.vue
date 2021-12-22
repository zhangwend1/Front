<template>
  <div>
    <div>
      添加运动员个人信息：
    </div>
    <br>
    <va-input
        class="mb-4"
        v-model="athleteName"
        label="姓名"
        placeholder="Name"
    />
    <va-input
        class="mb-4"
        v-model="athleteID"
        label="ID"
        placeholder="ID"
    />
    <va-select v-model="athleteAge" label="Age" :options="optionsAge" />
    <br>
    <va-select v-model="athleteGender" label="Gender" :options="optionsGender" />
    <br>
    <div v-if="athleteGender==='male'">
      <div v-for = "item in MaleEvents">
        <va-checkbox
            v-model="sportsSelection"
            :array-value="item"
            :label=item.name
        />
      </div>
    </div>
    <div v-else-if="athleteGender==='female'">
      <div v-for = "item in FemaleEvents">
        <va-checkbox
            v-model="sportsSelection"
            :array-value="item"
            :label=item.name
        />
      </div>
    </div>

    <div style="text-align: center">
      <va-button color="info" @click="submitInfo()">提交</va-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddAthlete",
  data(){
    return{
      athleteName:'',
      athleteID:'',
      athleteGender:'',
      athleteAge:'',
      optionsAge: ['7-8', '9-10', '11-12'],
      optionsGender: ['male', 'female'],
      MaleEvents: [{id:1,name:'单杠',sex:1}, {id:2,name:'双杠',sex:1},{id:3,name:'吊环',sex:1},{id:4,name:'跳马',sex:1},{id:5,name:'自由体操',sex:1},{id:6,name:'鞍马',sex:1},{id:7,name:'蹦床',sex:1}],
      FemaleEvents: [{id:8,name:'跳马',sex:0},{id:9,name:'高低杠',sex:0},{id:10,name:'平衡木',sex:0},{id:11,name:'自由体操',sex:0},{id:12,name:'蹦床',sex:0}],
      sportsSelection:[]
    }
  },
  methods:{
    submitInfo(){
      if((!this.athleteName)||(!this.athleteID)||(!this.athleteGender)||(!this.athleteAge)||(!this.sportsSelection.length)){
        alert("请填写完整");
        return;
      }
      let name =this.athleteName;
      let idNumber=this.athleteID;
      let age=0;
      if(this.athleteAge==='7-8'){
        age=7;
      }
      if(this.athleteAge==='9-10'){
        age=9;
      }
      if(this.athleteAge==='11-12'){
        age=11;
      }
      let ageClassId=0;
      if(this.athleteAge==='7-8'){
        ageClassId=1;
      }
      if(this.athleteAge==='9-10'){
        ageClassId=2;
      }
      if(this.athleteAge==='11-12'){
        ageClassId=3;
      }
      let sex=0;
      if(this.athleteGender==='male'){
        sex = 1;
      }
      if(this.athleteGender==='female'){
        sex = 0;
      }
      let teamId =this.$store.state.thisTeam.nowTeamID;
      const athlete={name,idNumber,age,ageClassId,sex,teamId}
      const events=this.sportsSelection;
      axios.post("/athlete/addAthlete",{athlete,events}, {
      }).then(response => {
        if (response.status === 200) {
          this.$vaToast.init("修改成功")
        } else {
          this.$vaToast.init("修改失败")
        }
      }).catch(err => {
        this.$vaToast.init("修改失败")
      })
    }
  }
}
</script>

<style scoped>

</style>