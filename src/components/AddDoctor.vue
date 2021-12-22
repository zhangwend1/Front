<template>
  <div>
    <div>
      添加队医个人信息：
    </div>
    <br>
    <va-input
        class="mb-4"
        v-model="doctorName"
        label="姓名"
        placeholder="Name"
    />
    <va-input
        class="mb-4"
        v-model="doctorID"
        label="ID"
        placeholder="ID"
    />
    <va-input
        class="mb-4"
        v-model="doctorPhoneNum"
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
  name: "AddDoctor",
  data(){
    return{
      doctorName:'',
      doctorID:'',
      doctorPhoneNum:''
    }
  },
  methods:{
    submitInfo(){
      if((!this.doctorName)||(!this.doctorID)||(!this.doctorPhoneNum)){
        alert("请填写完整");
        return;
      }
      let name = this.doctorName;
      let idNumber = this.doctorID;
      let phone = this.doctorPhoneNum;
      let teamId = this.$store.state.thisTeam.nowTeamID;
      if((!this.doctorName)||(!this.doctorID)||(!this.doctorPhoneNum)){
        alert("请填写完整");
        return;
      }
      axios.post("/doctor/addDoctor",{name,idNumber,phone,teamId}, {
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