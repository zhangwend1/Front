<template>
  <div>
    <div>
      添加领队个人信息：
    </div>
    <br>
    <va-input
        class="mb-4"
        v-model="leaderName"
        label="姓名"
        placeholder="Name"
    />
    <va-input
        class="mb-4"
        v-model="leaderID"
        label="ID"
        placeholder="ID"
    />
    <va-input
        class="mb-4"
        v-model="leaderPhoneNum"
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
  name: "AddLeader",
  data(){
    return{
      leaderName:'',
      leaderID:'',
      leaderPhoneNum:''
    }
  },
  methods:{
    submitInfo(){
      let name = this.leaderName;
      let idNumber = this.leaderID;
      let phone = this.leaderPhoneNum;
      let teamId = this.$store.state.thisTeam.nowTeamID;
      if((!this.leaderName)||(!this.leaderID)||(!this.leaderPhoneNum)){
        alert("请填写完整");
        return;
      }
      axios.post("/leader/insertLeader",{name,idNumber,phone,teamId}, {
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