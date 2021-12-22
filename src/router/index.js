
import {createRouter, createWebHashHistory} from 'vue-router'
import Admin from "../components/Admin.vue";
import Teams from "../components/Teams.vue";
import Matches from "../components/Matches.vue";
import Login from "../components/Login.vue";
import ShowMatches from "../components/ShowMatches.vue";
import AddMatch from "../components/AddMatch.vue";
import Leader from "../components/Leader.vue";
import teamMessage from "../components/teamMessage.vue";
import manageTeamInfo from "../components/manageTeamInfo.vue";
import AddLeader from "../components/AddLeader.vue";
import AddDoctor from "../components/AddDoctor.vue";
import AddAthlete from "../components/AddAthlete.vue";
import AddUmpire from "../components/AddUmpire.vue";
import AddCoach from "../components/AddCoach.vue";
import Umpire from "../components/Umpire.vue";
import Score from "../components/Score.vue";


const routes = [
     {
       path: '/',
       component: Login
     },
     {
        path: '/Umpire',
        component: Umpire,
        children: [
            {
                path:'Score',
                component: Score
            }
        ]
     },
     {
         path: '/Admin',
         component: Admin,
         children:[
             {path: 'Teams', component: Teams},
             {
                 path: 'Matches',
                 component: Matches,
                 children:[
                     {
                         path: 'ShowMatches',
                         component: ShowMatches,
                         children:[{path:'AddMatch',component: AddMatch}]
                     }
                     ]
             },
         ]
     },
    {
        path: '/Leader',
        component: Leader,
        children:[
            {
                path: 'teamMessage',
                component: teamMessage
            },
            {
                path:'manageTeamInfo',
                component: manageTeamInfo,
                children: [
                    {
                        path:'AddLeader',
                        component: AddLeader,
                    },
                    {
                      path: 'AddDoctor',
                      component:AddDoctor
                    },
                    {
                        path: 'AddAthlete',
                        component: AddAthlete
                    },
                    {
                        path: 'AddCoach',
                        component: AddCoach
                    },
                    {
                        path: 'AddUmpire',
                        component: AddUmpire
                    }
                ]
            }
        ]
    }

]


const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router
