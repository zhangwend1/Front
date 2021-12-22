<template>
  <!--  <div>-->
  <!--    <router-link active-class="active" to="/Admin">狗管理</router-link>-->
  <!--    <br>-->
  <!--    <router-link active-class="active" to="/Leader">领队</router-link>-->
  <!--  </div>-->
  <div class="background">
    <div style="position: absolute; width: 20%; height: 30%; top:25%; left: 75%">
      <div style="text-align: center; margin-bottom: 25px; font-size: 25px">登陆界面</div>
      <va-input
          class="mb-4"
          v-model="account"
          label="Account"
          placeholder="account"
      />
      <va-input
          class="mb-4"
          v-model="password"
          label="Password"
          placeholder="password"
      />
      <div style="text-align: center; margin-bottom: 15px; ">
        <va-button color="info" @click="checkAccount()">登录</va-button>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    checkAccount() {
      if ((!this.password) || (!this.account)) {
        alert("请填写账号密码");
        return;
      }
      // if((this.account==="admin")||(this.password==="010")){
      //   this.$router.push({path:"/Admin"});
      // }
      axios.get("/login", {
        params: {
          account: this.account,
          password: this.password
        }
      }).then(response => {
        if (response.data.accountType === 0) {
          this.$router.push({path: "/Admin"});
        } else if (response.data.accountType === 1) {
          this.$router.push({path: "/Umpire"});
          this.$store.commit("changeThisUmpire", {
            nowUmpireID: response.data.id
          });
        } else if (response.data.accountType === 2) {
          this.$router.push({path: "/Leader"});
          this.$store.commit("changeThisTeam", {
            nowTeamID: response.data.id
          });
        } else {
          alert("账号密码不正确");
        }

      }).catch(err => {

      })

    }
  }
}
</script>

<style>
.background {
  background-image: url("../assets/bg.jpg");
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.front {
  z-index: 1;
  position: absolute;
}
</style>