<template>
  <div>
    <div>
      添加教练员个人信息：
    </div>
    <br>
    <va-input
        class="mb-4"
        v-model="coachName"
        label="姓名"
        placeholder="Name"
    />
    <va-select v-model="coachGender" label="Gender" :options="optionsGender" />
    <br>
    <va-input
        class="mb-4"
        v-model="coachID"
        label="ID"
        placeholder="ID"
    />
    <va-input
        class="mb-4"
        v-model="coachPhoneNum"
        label="PhoneNum"
        placeholder="PhoneNum"
    />
    <div style="text-align: center">
      <va-button color="info" @click="submitInfo()">提交</va-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddCoach",
  data(){
    return{
      coachName:'',
      coachID:'',
      coachPhoneNum:'',
      optionsGender: ['male', 'female'],
      coachGender:''
    }
  },
  methods:{
    submitInfo(){
      if((!this.coachName)||(!this.coachID)||(!this.coachPhoneNum)||(!this.coachGender)){
        alert("请填写完整");
        return;
      }
      let sex = 0;
      if(this.coachGender==='male'){
        sex = 1;
      }
      if(this.coachGender==='female'){
        sex = 0;
      }
      let name = this.coachName;
      let phone = this.coachPhoneNum;

      let teamId = this.$store.state.thisTeam.nowTeamID;
      let idNumber =this.coachID;


      axios.post("/coach/addCoach",{name,phone,sex,teamId,idNumber}, {
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