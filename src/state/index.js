import { createStore } from 'vuex'
import router from "../router";

// 创建一个新的 store 实例
const store = createStore({
    state () {
        return {
            editingState: {
                age:'',
                gender:'',
                maleEvents:'',
                femaleEvents:''
            },
            thisTeam:{
                nowTeamID:'',
            },
            thisUmpire:{
                nowUmpireID:'',
            }
        }
    },
    mutations: {
        changeEditingState (state, editingState) {
            state.editingState = editingState;
        },
        changeThisTeam(state, thisTeam){
            state.thisTeam = thisTeam;
        },
        changeThisUmpire(state,thisUmpire){
            state.thisUmpire = thisUmpire;
        }
    }
})

export default store
