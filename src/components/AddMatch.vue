<template>
<!--  <div>-->
<!--    {{ valueAge }}{{ valueGender }}{{ valueMaleEvents }}{{ valueFemaleEvents }}-->
<!--  </div>-->
  <div STYLE="display: flex; flex: 1 1 auto;">
    <va-card>
      <va-card-title>Players</va-card-title>
      <va-card-actions align="stretch" vertical>
        <div>
          <div class="mb-4">已选运动员：{{ playersSelection }}</div>
          <div v-for = "item in players">
            <va-checkbox
                v-model="playersSelection"
                :array-value="item.name"
                :label="item.name"
            />
          </div>
        </div>
      </va-card-actions>
    </va-card>
    <va-card>
      <va-card-title>Umpires</va-card-title>
      <va-card-actions align="stretch" vertical>
        <div>
          <div class="mb-4">已选裁判：{{ umpiresSelection }}</div>
          <div v-for = "item in umpires">
            <va-checkbox
                v-model="umpiresSelection"
                :array-value="item.name"
                :label="item.name"
            />
          </div>
        </div>
      </va-card-actions>
    </va-card>
  </div>
  <div>
    <va-button color="info" gradient class="mr-4" @click="submitInfo()">提交</va-button>
    <va-modal ref="warningConfirm" stateful title="警告"
              @cancel="cancelWarning" message="运动员数量不得大于8并且裁判数量不得大于5" @ok="okWarning">
    </va-modal>
  </div>


</template>

<script>
import {VaCard} from "vuestic-ui";
import {VaCardActions} from "vuestic-ui";
import {VaCardTitle} from "vuestic-ui";
import {VaButton} from "vuestic-ui";
export default {
  name: "AddMatch",
  components:{
    VaCard,
    VaCardTitle,
    VaButton,
    VaCardActions
  },
  data(){
    const players = [{name:'Tom'},{name:'Dick'},{name:'Gac'},{name:'Fss'},{name:'Sfd'},{name:'Sgg'},{name:'DS'},{name:'Adf'},{name:'Sfs'}]
    const umpires = [{name:'A'},{name:'B'},{name:'C'},{name:'D'},{name:'E'},{name:'F'}]

    return{
      players,
      umpires,
      playersSelection: [],
      umpiresSelection: [],
      valueAge:this.$store.state.editingState.age,
      valueGender:this.$store.state.editingState.gender,
      valueMaleEvents:this.$store.state.editingState.maleEvents,
      valueFemaleEvents:this.$store.state.editingState.femaleEvents
    }
  },
  methods:{
    submitInfo(){
      if((this.playersSelection.length>8)||(this.umpiresSelection.length>5)){
        this.$refs.warningConfirm.show();
      }
    },
    cancelWarning(){

    },
    okWarning(){

    }
  }
}
</script>

<style scoped>

</style>