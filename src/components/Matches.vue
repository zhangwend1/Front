<template>
  <div>

  <div style="display:flex; flex:1 1 auto">
    <va-select v-model="valueAge" label="Age" :options="optionsAge" />
    <va-select v-model="valueGender" label="Gender" :options="optionsGender" />
    <div v-if="valueGender==='male'">
    <va-select v-model="valueMaleEvents" label="Events" :options="optionsMaleEvents" />
    </div>
    <div v-else-if="valueGender==='female'">
      <va-select v-model="valueFemaleEvents" label="Events" :options="optionsFemaleEvents" />
    </div>
    <div v-else></div>
    <div style="margin-left: 5px;height: 30px;">
<!--      <router-link active-class="active" @click.native="stopJump()" to="/Admin/Matches/ShowMatches">-->
        <va-button icon="search" @click="jumpHandle">Search</va-button>
    </div>

  </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Matches",
  data () {
    return {
      valueAge:'',
      valueGender:'',
      valueMaleEvents:'',
      valueFemaleEvents:'',
      optionsAge: ['7-8', '9-10', '11-12'],
      optionsGender: ['male', 'female'],
      optionsMaleEvents: ['单杠', '双杠', '吊环', '跳马', '自由体操', '鞍马', '蹦床'],
      optionsFemaleEvents: ['跳马', '高低杠', '平衡木', '自由体操', '蹦床']
    }
  },
  methods:{
    jumpHandle(){
      let age = this.valueAge;
      let gender = this.valueGender;
      let maleEvents = this.valueMaleEvents;
      let femaleEvents = this.valueFemaleEvents;

      if (this.valueGender&&this.valueAge&&(this.valueMaleEvents||this.valueFemaleEvents)){

        this.$router.push({path:"/Admin/Matches/ShowMatches"});
      }
    }

  }
}
</script>

<style>

</style>