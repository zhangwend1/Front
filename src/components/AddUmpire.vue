<template>
  <div>
    <div>
      添加裁判个人信息：
    </div>
    <br>
    <va-input
        class="mb-4"
        v-model="umpireName"
        label="姓名"
        placeholder="Name"
    />
    <va-input
        class="mb-4"
        v-model="umpireID"
        label="ID"
        placeholder="ID"
    />
    <va-input
        class="mb-4"
        v-model="umpirePhoneNum"
        label="PhoneNum"
        placeholder="PhoneNum"
    />
    <va-input
        class="mb-4"
        v-model="umpireAccount"
        label="umpireAccount"
        placeholder="umpireAccount"
    />
    <va-input
        class="mb-4"
        v-model="umpirePassword"
        label="umpirePassword"
        placeholder="umpirePassword"
    />
    <div style="text-align: center">
      <va-button color="info" @click="submitInfo()">提交</va-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddUmpire",
  data(){
    return{
      umpireName:'',
      umpireID:'',
      umpirePhoneNum:'',
      umpireAccount:'',
      umpirePassword:''
    }
  },
  methods:{
    submitInfo(){
      if((!this.umpireName)||(!this.umpireID)||(!this.umpirePhoneNum)||(!this.umpireAccount)||(!this.umpirePassword)){
        alert("请填写完整");
        return;
      }
      let name = this.umpireName;
      let idNumber = this.umpireID;
      let phone = this.umpirePhoneNum;
      let teamId = this.$store.state.thisTeam.nowTeamID;
      let account = this.umpireAccount;
      let password = this.umpirePassword;
      axios.post("/referee/insertReferee",{name,idNumber,phone,teamId,account,password}, {
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