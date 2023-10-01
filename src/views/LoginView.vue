<template>
    <div class="login">
      <HelloLogout></HelloLogout>
    <el-menu  
        :default-active=activeIndex
        class="el-menu-demo"  
        mode="horizontal"  
        :ellipsis="false"  
        @select="handleSelect"  
        style="margin-left: 120px;"
        >  
        <el-menu-item index="0" class="menu-item">新闻动态</el-menu-item>  
        <el-menu-item index="1" class="menu-item">公社大厅</el-menu-item>  
        <el-menu-item index="2" class="menu-item">朋友圈子</el-menu-item>  
        <el-menu-item index="3" class="menu-item">关注收藏</el-menu-item>  
        <el-menu-item index="4" class="menu-item">我的主页</el-menu-item>  
        <el-menu-item index="5" class="menu-item">共享服务</el-menu-item>  
        <el-menu-item index="6" class="menu-item">本站介绍</el-menu-item>  
        <el-menu-item index="7" class="menu-item">安批百科</el-menu-item>  
    </el-menu>  
   
    <el-container>  
    <el-main style="padding: 0px;" >  
        <el-row style="width: 960px;"  v-if="activeIndex === '0'">  
              <el-col :span="3">  
                  <el-menu
                  :default-active=activeSubIndex0
                  class="el-menu-vertical-demo"
                  @select="subhandleSelect0"  
                  >
                    <el-menu-item index="01" class="menu-item18">
                      <span>我要发布</span>
                    </el-menu-item>
                    <el-menu-item index="02" class="menu-item18">
                      <span>用户动态</span>
                    </el-menu-item>
                    <el-menu-item index="03" class="menu-item18">
                      <span>内容动态</span>
                    </el-menu-item>
                    <el-menu-item index="04" class="menu-item18">
                      <span>互动信息</span>
                    </el-menu-item>
                    <el-menu-item index="05" class="menu-item18">
                      <span>系统通知</span>
                    </el-menu-item>
                    <el-menu-item index="06" class="menu-item18">
                      <span>历史动态</span>
                    </el-menu-item>
                  </el-menu>
              </el-col>  
              <el-col :span="21"  v-if="activeSubIndex0 === '01'">  
                  我要发布的内容
              </el-col>  
              <el-col :span="21" v-if="activeSubIndex0 === '02'">  
                  用户动态
              </el-col>  
              <el-col :span="21" v-if="activeSubIndex0 === '03'">  
                内容动态
              </el-col>  
              <el-col :span="21" v-if="activeSubIndex0 === '04'">  
                互动信息
              </el-col>  
              <el-col :span="21" v-if="activeSubIndex0 === '05'">  
                系统通知
              </el-col>  
              <el-col :span="21" v-if="activeSubIndex0 === '06'">  
                历史动态
              </el-col>  
        </el-row>  

        <el-row style="width: 960px;"  v-if="activeIndex === '1'">  
              <el-col :span="3">  
                  <el-menu
                  :default-active=activeSubIndex1
                  class="el-menu-vertical-demo"
                  @select="subhandleSelect1"  
                  >
                    <el-menu-item index="11" class="menu-item18">
                      <span>公议事项</span>
                    </el-menu-item>
                    <el-menu-item index="12" class="menu-item18">
                      <span>公社架构</span>
                    </el-menu-item>
                    <el-menu-item index="13" class="menu-item18">
                      <span>协会列表</span>
                    </el-menu-item>
                    <el-menu-item index="14" class="menu-item18">
                      <span>公社成员</span>
                    </el-menu-item>
                    <el-menu-item index="15" class="menu-item18">
                      <span>任务列表</span>
                    </el-menu-item>
                  </el-menu>
              </el-col>  
              <el-col :span="21"  v-if="activeSubIndex1 === '12'">  
                  这是树状公社机构列表
              </el-col>  
              <el-col :span="21" v-if="activeSubIndex1 === '13'">  
                  这是协会列表
              </el-col>  
              <el-col :span="21" v-if="activeSubIndex1 === '11'">  
                  这是你参加的公社和协会的公共事项
              </el-col>  
              <el-col :span="21" v-if="activeSubIndex1 === '14'">  
                  这是所有的公社成员信息
              </el-col>  
              <el-col :span="21" v-if="activeSubIndex1 === '15'">  
                  这是你的任务列表
              </el-col>  
        </el-row>  


        <el-row style="width: 960px;"  v-if="activeIndex === '2'">  
              <el-col :span="3">  
                  <el-menu
                  :default-active=activeSubIndex1
                  class="el-menu-vertical-demo"
                  @select="subhandleSelect1"  
                  >
                    <el-menu-item index="21" class="menu-item18">
                      <span>公议事项</span>
                    </el-menu-item>
                    <el-menu-item index="22" class="menu-item18">
                      <span>公社架构</span>
                    </el-menu-item>
                    <el-menu-item index="23" class="menu-item18">
                      <span>协会列表</span>
                    </el-menu-item>
                    <el-menu-item index="24" class="menu-item18">
                      <span>公社成员</span>
                    </el-menu-item>
                    <el-menu-item index="25" class="menu-item18">
                      <span>任务列表</span>
                    </el-menu-item>
                  </el-menu>
              </el-col>  
              <el-col :span="21"  v-if="activeSubIndex1 === '22'">  
                  这是树状公社机构列表
              </el-col>  
              <el-col :span="21" v-if="activeSubIndex1 === '23'">  
                  这是协会列表
              </el-col>  
              <el-col :span="21" v-if="activeSubIndex1 === '21'">  
                  这是你参加的公社和协会的公共事项
              </el-col>  
              <el-col :span="21" v-if="activeSubIndex1 === '24'">  
                  这是所有的公社成员信息
              </el-col>  
              <el-col :span="21" v-if="activeSubIndex1 === '25'">  
                  这是你的任务列表
              </el-col>  
        </el-row>  

        <el-row style="width: 960px;" v-if="activeIndex === '6'">
            <el-col :span="3">
              <el-menu
                :default-active=activeSubIndex6
                class="el-menu-vertical-demo"
                @select="subhandleSelect6"
              >
                <el-menu-item index="61" class="menu-item18">
                  <span>公社实况</span>
                </el-menu-item>
                <el-menu-item index="62" class="menu-item18">
                  <span>西撒地区</span>
                </el-menu-item>
                <el-menu-item index="63" class="menu-item18">
                  <span>设计理念</span>
                </el-menu-item>
                <el-menu-item index="64" class="menu-item18">
                  <span>功能介绍</span>
                </el-menu-item>
              </el-menu>
          </el-col>
          <el-col :span="21" v-if="activeSubIndex6 === '62'">
            这是树状公社机构列表
          </el-col>
          <el-col :span="21" v-if="activeSubIndex6 === '63'">
            这是协会列表
          </el-col>
          <el-col :span="21" v-if="activeSubIndex6 === '61'">
            这是你参加的公社和协会的公共事项
          </el-col>
          <el-col :span="21" v-if="activeSubIndex6 === '64'">
            这是所有的公社成员信息
          </el-col>
      </el-row>

        <el-row style="width: 960px;"  v-if="activeIndex === '7'">  
              <el-col :span="3">  
                  <el-menu
                  :default-active=activeSubIndex7
                  class="el-menu-vertical-demo"
                  @select="subhandleSelect7"  
                  >
                    <el-menu-item index="71" class="menu-item18">
                      <span>词条排行</span>
                    </el-menu-item>
                    <el-menu-item index="72" class="menu-item18">
                      <span>恶人榜单</span>
                    </el-menu-item>
                    <el-menu-item index="73" class="menu-item18">
                      <span>旧闻跟踪</span>
                    </el-menu-item>
                    <el-menu-item index="74" class="menu-item18">
                      <span>知识地图</span>
                    </el-menu-item>
                  </el-menu>
              </el-col>  
              <el-col :span="21"  v-if="activeSubIndex7 === '72'">  
                
              </el-col>  
              <el-col :span="21" v-if="activeSubIndex7 === '73'">  
                  这是协会列表
              </el-col>  
              <el-col :span="21" v-if="activeSubIndex7 === '71'">  
                  这是你参加的公社和协会的公共事项
              </el-col>  
              <el-col :span="21" v-if="activeSubIndex7 === '74'">  
                  这是所有的公社成员信息
              </el-col>  
        </el-row>  




    </el-main>


    <el-aside class="aside-left">  
            <el-button class="flat-button" @click="handleClick('search')">搜</el-button>  
            <el-button class="flat-button" @click="handleClick('ask')">问</el-button>  
            <el-button class="flat-button" @click="handleClick('debate')">辩</el-button>  
            <el-button class="flat-button" @click="handleClick('donate')">捐</el-button>  
            <el-button class="flat-button" @click="handleClick('chat')">聊</el-button>  
            <el-button class="flat-button" @click="handleClick('chat')">AI</el-button>  
            <el-button class="flat-button" @click="handleClick('chat')">邮</el-button>  
            <el-button class="flat-button" @click="handleClick('chat')">播</el-button>  
    </el-aside>  
</el-container>


   
  </div>  
</template>  
  
<script>  
import { ref } from 'vue'; 
// import { ElMenu, ElMenuItem } from 'element-plus';  
// import 'element-plus/lib/theme-chalk/index.css';  
import HelloLogout from '../components/CommonComp/HelloLogout.vue';
  
export default {  

  components: {
    HelloLogout
  },

methods: {  
    handleClick(action) {  
      console.log(action);  
      window.open('/' + action, '_blank');
    },  


  }, 
setup() {  
    const activeIndex = ref('0'); // 默认选中新闻动态  
    const activeSubIndex0 = ref('01'); 
    const activeSubIndex1 = ref('11'); 
    const activeSubIndex6 = ref('61'); 
    const activeSubIndex7 = ref('71'); 
  
    const handleSelect = (index) => {  
      activeIndex.value = index;  
    };  
  
    const subhandleSelect0 = (index) => {  
      activeSubIndex0.value = index;  
    };   

    const subhandleSelect1 = (index) => {  
      activeSubIndex1.value = index;  
    };       
    
    const subhandleSelect6 = (index) => {  
      activeSubIndex6.value = index;  
    };   

    const subhandleSelect7 = (index) => {  
      activeSubIndex7.value = index;  
    };   

    return {  
      activeIndex,  
      activeSubIndex0,
      activeSubIndex1,
      activeSubIndex6,
      activeSubIndex7,
      handleSelect,  
      subhandleSelect0,
      subhandleSelect1,
      subhandleSelect6,
      subhandleSelect7,
    };  
  },  
};  
</script>

<style>  
.login{width: 1280px;  
      margin: 0 auto;      
    }

.header{
  width: 1280px;background-color:#708090;;height: 40px;color: white;
  font-size:40px;line-height: 40px;text-align: left;padding: 0;
}



.menu-item {  
  font-size: 20px;  
  color: gray !important;
}  
.menu-item18 {  
  font-size: 18px;  
  /* color: gray !important; */
  text-align: center;
}  
.el-menu-vertical-demo {  
  border-right: none !important;  
}
.aside-left {  
  display: flex;  
  flex-direction: column;  
  align-items: flex-end;  
  justify-content: space-between;  
  width: 120px;
  height: 400px;

}  
  
.flat-button {  
  margin-bottom: 0px !important;
  padding: 15px;  
  height: 56px;  
  border: none;  
  border-radius: 4px;  
  background-color: #fff;  
  color: #666;  
  font-size: 25px;  
  cursor: pointer; 
}  
  
.flat-button:hover {  
  background-color: #f2f2f2;  
}  
</style>

