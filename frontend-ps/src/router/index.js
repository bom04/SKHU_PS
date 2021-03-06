import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue';
import StudentSignUp from '../views/StudentSignUp.vue';
import FindPass from '../views/FindPass.vue';
import Home from '../views/Home.vue';
import FindPassAlert from '../views/FindPassAlert.vue'; 
import Profile from '../views/Profile.vue';
import EditProfile from '../views/EditProfile.vue'; 
import ProjectBoard from '../views/ProjectBoard.vue'; 
import MyProjectManager from '../views/MyProjectManager.vue';
import ProfessorAuth from '../views/ProfessorAuth.vue';
import UserSelect from '../views/UserSelect.vue';
import ProfessorSignUp from '../views/ProfessorSignUp.vue';
import SignUpAlert from '../views/SignUpAlert.vue';
import AuthAlert from '../views/AuthAlert.vue';
import ChangePw from '../views/ChangePw.vue';
import ProfessorHome from '../views/ProfessorHome.vue'
import ProfessorProfile from '../views/ProfessorProfile.vue'
import EditProfessorProfile from '../views/EditProfessorProfile.vue'
import Team from '../views/Team.vue'
import ProfessorSummary from '../views/ProfessorSummary.vue'
import Score from '../views/Score.vue'
import ProjectSearch from '../views/ProjectSearch.vue'
import NoticeEdit from '../views/NoticeEdit.vue'
import SubmitFileList from '../views/SubmitFileList.vue'
import FreeBoard from '../views/FreeBoard.vue'
import FreeContent from '../views/FreeContent.vue'
import FreeEdit from '../views/FreeEdit.vue'
import CommunityBoard from '../views/CommunityBoard.vue'
import CommunityContent from '../views/CommunityContent.vue'
import CommunityEdit from '../views/CommunityEdit.vue'
import CommunitySearch from '../views/CommunitySearch.vue'

import StudentNoticeBoard from '../views/StudentNoticeBoard.vue'
import StudentNoticeContent from '../views/StudentNoticeContent.vue'

import NoticeBoard from '../views/NoticeBoard.vue'
import NoticeContent from '../views/NoticeContent.vue'

import MyProjectEdit from '../views/MyProjectEdit';
import Summary from '../views/summary.vue';

import WeeklyGoal from '../views/WeeklyGoal.vue'
import Todo from '../views/Todo.vue'

import Contest from '../views/Contest.vue'

// import test from '../views/test.vue';
// import test2 from '../views/test2.vue';

Vue.use(VueRouter)

  const routes = [
    //{path:'/test', name:'Test',component:test},
    //{path:'/test2', name:'Test2',component:test2},
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/professorSignUp',
    name: 'ProfessorSignUp',
    component: ProfessorSignUp
  },
  {
    path: '/studentSignUp',
    name: 'studentSignUp',
    component: StudentSignUp
  },
  {
    path: '/findPass',
    name: 'FindPass',
    component: FindPass
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/findPassAlert',
    name: 'FindPassAlert',
    component: FindPassAlert
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/editProfile',
    name: 'EditProfile',
    component: EditProfile
  },
  {
    path: '/projectBoard',
    name: 'ProjectBoard',
    component: ProjectBoard,
  },
  {
    path: '/project/:projectId/manage',
    name: 'MyProjectManager',
    component: MyProjectManager
  },
  {
    path: '/professorAuth',
    name: 'ProfessorAuth',
    component: ProfessorAuth
  },
  {
    path: '/userSelect',
    name: 'UserSelect',
    component: UserSelect
  },
  {
    path: '/signUpAlert',
    name: 'SignUpAlert',
    component: SignUpAlert
  },  
  {
    path: '/authAlert/:authKey',
    name: 'AuthAlert',
    component: AuthAlert
  },
  {
    path: '/changePw/:authKey',
    name: 'ChangePw',
    component: ChangePw
  },
  {
    path: '/project/:projectId/summary',
    name: 'Summary',
    component: Summary
  },
  {
    path: '/project/:projectId/edit',
    name: 'ProjectEdit',
    component: MyProjectEdit
  },
  {
    path: '/project/:projectId/weekly/',
    name: 'WeeklyGoal',
    component: WeeklyGoal
  },
  {
    path: '/project/:projectId/weekly/:week/',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/professorHome',
    name: 'professorHome',
    component: ProfessorHome
  },
  {
    path: '/professorProfile',
    name: 'professorProfile',
    component: ProfessorProfile
  }, 
  {
    path: '/editProfessorProfile',
    name: 'editProfessorProfile',
    component: EditProfessorProfile
  },
  {
    path: '/subject/:subjectId/Team',
    name: 'team',
    component: Team
  },
  {
    path: '/Professor/:subjectId/summary',
    name: 'professorSummary',
    component: ProfessorSummary
  },
  {
    path: '/subject/:subjectId/score',
    name: 'score',
    component: Score
  },
  {
    path: '/ProjectSearch',
    name: 'projectSearch',
    component: ProjectSearch
  },
  {
    path: '/subject/:subjectId/noticeBoard',
    name: 'noticeBoard',
    component: NoticeBoard
  },
  {
    path: '/subject/:subjectId/noticeBoard/:postId',
    name: 'noticeContent',
    component: NoticeContent
  },
  {
    path: '/subject/:subjectId/noticeBoard/:postId/edit',
    name: 'noticeEdit',
    component: NoticeEdit
  },
  {
    path: '/subject/:subjectId/noticeBoard/:postId/fileList',
    name: 'submitFileList',
    component: SubmitFileList
  },
  {
    path: '/project/:projectId/noticeBoard',
    name: 'studentNoticeBoard',
    component: StudentNoticeBoard
  },
  {
    path: '/project/:projectId/noticeBoard/:postId',
    name: 'studentNoticeContent',
    component: StudentNoticeContent
  },
  {
    path: '/project/:projectId/freeBoard',
    name: 'freeBoard',
    component: FreeBoard
  },
  {
    path: '/project/:projectId/freeBoard/:postId',
    name: 'freeContent',
    component: FreeContent
  },
  {
    path: '/project/:projectId/freeBoard/:postId/edit',
    name: 'freeEdit',
    component: FreeEdit
  },
  {
    path: '/contest',
    name: 'Contest',
    component: Contest
  },
  {
    path: '/community',
    name: 'communityBoard',
    component: CommunityBoard
  },
  {
    path: '/community/:postId',
    name: 'communityContent',
    component: CommunityContent
  },
  {
    path: '/community/:postId/edit',
    name: 'communityEdit',
    component: CommunityEdit
  },
  {
    path: '/communitySearch',
    name: 'communitySearch',
    component: CommunitySearch
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
