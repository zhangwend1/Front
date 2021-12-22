<template>
  <div>
    <va-data-table :items="items" :columns="columns" :striped="true" :hoverable="true">
      <template #cell(action)="{ rowIndex: index }">
        <va-button-group flat>
          <va-button icon="create" @click="handleChangeClick(this.items[index])"/>
          <va-button icon="clear" @click="handleDeleteClick(this.items[index])"/>
        </va-button-group>
      </template>
    </va-data-table>
    <va-button  icon="add" @click="handleAddClick()"/>
    <va-modal ref="addConfirm" stateful title="添加队伍"
              @cancel="cancelAdd"  @ok="addTeam">
      <va-input
          class="mb-4"
          v-model="this.newTeamName"
          label="Name"
          placeholder="Name"
      />
      <va-input
          class="mb-4"
          v-model="this.newTeamAccount"
          label="Accont"
          placeholder="Accont"
      />
      <va-input
          class="mb-4"
          v-model="this.newTeamPassword"
          label="Password"
          placeholder="Password"
      />
    </va-modal>

    <va-modal ref="changeConfirm" stateful title="更改信息"
              @cancel="cancelChange" @ok="changeTeam">
      <va-input
          class="mb-4"
          v-model="this.currentTeam.id"
          label="ID"
          placeholder="Label"
          readonly="true"
      />
      <va-input
          class="mb-4"
          v-model="this.currentTeam.name"
          label="Name"
          placeholder="Label"
      />
      <va-input
          class="mb-4"
          v-model="this.currentTeam.account"
          label="Author"
          placeholder="Label"
      />
      <va-input
          class="mb-4"
          v-model="this.currentTeam.password"
          label="Publisher"
          placeholder="Label"
      />
    </va-modal>

    <va-modal ref="deleteConfirm" stateful title="确认"
              @cancel="cancelDelete" :message="deleteMessage" @ok="deleteTeam">
    </va-modal>

  </div>
</template>

<script>
import {VaButtonGroup} from "vuestic-ui";
import {VaDataTable} from "vuestic-ui";
import {VaButton} from "vuestic-ui";
import {VaModal} from "vuestic-ui";
import {VaPopover} from "vuestic-ui";
import {VaInput} from "vuestic-ui";
import axios from "axios";

export default {
  name: "Teams",
  components: {
    VaDataTable,
    VaButtonGroup,
    VaButton,
    VaModal,
    VaPopover,
    VaInput
  },
  data() {

    const columns = [
      {key: 'id', verticalAlign: "center"},
      {key: 'name', verticalAlign: "center"},
      {key: 'account', verticalAlign: "center"},
      {key: 'password', verticalAlign: "center"},
      {key: 'action', label: "Action", verticalAlign: "center"},
    ]
    return {
      items:[],
      columns,
      currentId: -1,
      currentTeam: {},
      deleteMessage: "",
      newTeamName:'',
      newTeamAccount:'',
      newTeamPassword:''
    }
  },
  mounted() {
    this.getinfo();
  },
  methods: {
    async getinfo() {
      const response = await axios.get("/team/selectAll")
      this.items = response.data
    },

    handleChangeClick(team) {
      this.$refs.changeConfirm.show();
      this.currentId = team.id;
      this.currentTeam = team;
    },

    cancelChange() {
      this.currentId = -1;
    },

    changeTeam(){
      if (this.currentId < 0) {
        return;
      }
      if((!this.currentTeam.name)||(!this.currentTeam.account)||(!this.currentTeam.password)){
        alert("请完整填写信息");
        return;
      }
      let id=this.currentTeam.id;
      let name=this.currentTeam.name;
      let account=this.currentTeam.account;
      let password=this.currentTeam.password;
      axios.post("/team/updateTeam",{id,name,account,password}, {
      }).then(response => {
        if (response.status === 200) {
          this.getinfo();
          this.$vaToast.init("修改成功")
        } else {
          this.$vaToast.init("修改失败")
        }
      }).catch(err => {
        this.$vaToast.init("修改失败")
      })
    },

    handleDeleteClick(team) {
      this.$refs.deleteConfirm.show();
      this.deleteMessage = `是否确认删除 ${team.name}`;
      this.currentId = team.id;
    },

    cancelDelete() {
      this.currentId = -1;
      this.deleteMessage = "";
    },

    deleteTeam() {
      if (this.currentId < 0) {
        return;
      }
      axios.get("/team/deleteTeam", {
        params: {
          id: this.currentId
        }
      }).then(response => {
        if (response.status === 200) {
          this.getinfo();
          this.$vaToast.init("删除成功")
        } else {
          this.$vaToast.init("删除失败")
        }
      }).catch(err => {
        this.$vaToast.init("删除失败")
      })
    },

    handleAddClick(){
      this.$refs.addConfirm.show();
    },

    cancelAdd() {

    },

    addTeam(){
      if((!this.newTeamName)||(!this.newTeamAccount)||(!this.newTeamPassword)){
        alert("请完整填写信息");
        return;
      }
      let name=this.newTeamName;
      let account=this.newTeamAccount;
      let password=this.newTeamPassword;
      axios.post("/team/addTeam",{name,account,password},{
      }).then(response => {
        if (response.status === 200) {
          this.getinfo();
          this.$vaToast.init("添加成功")
        } else {
          this.$vaToast.init("添加失败")
        }
      }).catch(err => {
        this.$vaToast.init("添加失败")
      })
    }
  },
}
</script>

<style>

</style>