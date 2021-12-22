<template>
  <div style="display: flex">
    {{valueAge}}岁组
    <div v-if="valueGender==='male'">
      男子{{valueMaleEvents}}项目分组
    </div>
    <div v-else-if="valueGender==='female'">
      女子{{valueFemaleEvents}}项目分组
    </div>
  </div>
  <div>
    <va-data-table :items="items" :columns="columns" :striped="true" :hoverable="true">
    </va-data-table>
  </div>
  <div>
    <va-button  icon="add" @click="handleAddClick()"/>
  </div>
  <router-view></router-view>


</template>

<script>
import {VaButtonGroup, VaInput, VaModal, VaPopover} from "vuestic-ui";
import {VaDataTable} from "vuestic-ui";
import {VaButton} from "vuestic-ui";

export default {
  name: "ShowMatches",
  data () {
    const columns = [
      {key: 'matchId', verticalAlign: "center"},
      {key: 'players', verticalAlign: "center"},
      {key: 'umpires', verticalAlign: "center"},
    ]

    const items = [
      {
        matchId: 0,
        players: '2',
        umpires: 'xxxxxx',
      },
      {
        matchId: 0,
        players: '2',
        umpires: 'xxxxxx',
      }
    ];

    return {
      items,
      columns,
      valueAge:this.$store.state.editingState.age,
      valueGender:this.$store.state.editingState.gender,
      valueMaleEvents:this.$store.state.editingState.maleEvents,
      valueFemaleEvents:this.$store.state.editingState.femaleEvents
    }
  },
  components: {
    VaDataTable,
    VaButtonGroup,
    VaButton
  },
  methods:{
    handleAddClick(){
      this.$router.push({path:"/Admin/Matches/ShowMatches/AddMatch"});
    }
  }
}
</script>

<style scoped>

</style>