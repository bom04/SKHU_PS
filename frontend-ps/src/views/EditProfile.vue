<template>
  <div>
    <div class="profileContainer">
      <h3>정보 수정</h3>
      <hr style="margin:30px 0;">
      <div>
        <div style="margin:auto; max-width:700px; padding: 30px;">
            <b-form @submit="onSubmit" v-if="show" class="editForm">
              <!--intro-->
              <b-form-group style="text-align:left"
                id="input-group-1"
                label="한 줄 소개"
                label-for="intro"
              >
                <b-form-input 
                id="intro" 
                v-model="input.intro" 
                type="text"
                placeholder="한 줄 소개 없음"
                ></b-form-input>
              </b-form-group>

              <!--grade-->
              <b-form-group style="text-align:left"
                id="input-group-2"
                label="학년"
                label-for="grade"
              >
                <b-form-select
                  id="grade"
                  v-model="input.grade"
                  :options="gradeOptions"
                  value-field="item"
                  text-field="value"
                ></b-form-select>
              </b-form-group>

              <!--department-->
              <b-form-group style="text-align:left"
                id="input-group-3"
                label="학과"
                label-for="department"
              >
                <b-form-select
                  v-model="input.department"
                  :options="deptOptions"
                  value-field="detId"
                  text-field="detName"
                ></b-form-select>
              </b-form-group>

              <!--github-->
              <b-form-group style="text-align:left"
                id="input-group-4"
                label="깃허브 닉네임"
                label-for="github"
              >
                <b-form-input 
                id="github" 
                v-model="input.github" 
                type="text"
                ></b-form-input>
                <b-form-text id="input-live-help">깃허브 계정이 있다면 입력하세요.</b-form-text>
              </b-form-group>

              <!--Language-->
              <b-form-group style="text-align:left"
                id="input-group-5"
                label="주요 분야"
                label-for="language"
              >
                <b-form-tags
                  input-id="language"
                  :input-attrs="{ 'aria-describedby': 'tags-remove-on-delete-help' }"
                  v-model="tagArray"
                  separator=" ,;"
                  placeholder="태그를 입력하세요"
                  remove-on-delete
                  add-on-enter
                  class="mb-2"
              ></b-form-tags>
                <b-form-text id="input-live-help">주로 사용하는 프로그래밍 언어나 기술이 있다면 입력하세요.</b-form-text>
              </b-form-group>

              <div style="text-align: right; margin-top:15px">
                <b-button style="margin-right:10px" type="submit">수정</b-button>
                <b-button variant="danger" @click="cancle">취소</b-button>
              </div>
            </b-form>

            <!-- {{tagArray}}
            {{tagArray.join(',')}} -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
//import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'EditProfile',
  data() {
      return {
        show: true,
        input: {
        },
        gradeOptions:[
          {item: 1, value:'1학년'},
          {item: 2, value:'2학년'},
          {item: 3, value:'3학년'},
          {item: 4, value:'4학년'}
        ],
        //학과 임시 목록 리스트
        deptOptions:[],
        tagArray: [],
      }
   },  
  mounted() {
        axios.get('/api/user')
        .then(response => {
            let info={
                'department':response.data.detDepartment.detId,
                'grade':response.data.grade,
                'github':response.data.github,
                'intro':response.data.intro,
                'language':response.data.language
            }
            this.input=info;
            this.tagArray=this.input.language.split(',')
        }).catch((erro)=> {
          console.error(erro);
        });

        axios.get('api/departments')
        .then(response => {
          this.deptOptions=response.data})
        .catch((error) => {
          console.error(error)
        })


   },
   methods:{
     onSubmit(evt) {
        evt.preventDefault()
        this.input.language=this.tagArray.join(',')
        
        axios.post('/api/user/profile', this.input)
        .then(() => {
          this.$router.push({
            path: '/profile'
          })
        })
        .catch(error => console.error(error));
      },
      cancle() {
        this.$router.push({
          path: '/profile'
        })
      },
   }
}
</script>
<style>
    .profileContainer {
        margin:100px;
    }

    .profileContainer h3{
        font-weight: bold;
    }

    .infoContainer h5{
        font-weight: bold;
    }
    .editForm label{
      font-weight: bold;
    }
    .editForm input::placeholder{
      color:silver;
    }
</style>
