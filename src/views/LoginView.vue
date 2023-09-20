<template>
    <div class="login">
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <div style="width: 1280px;margin: 0 auto;background-color:#708090;;height: 40px;color: white;">
      你好，xxx，今天是2023年10月11日，你有3条群消息，9条用户聊天信息，点击查看。
      </div>
    <el-menu  
        :default-active="activeIndex"  
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
        <el-menu-item index="7" class="menu-item">智能搜索</el-menu-item>
        <el-menu-item index="8" class="menu-item">提问辩论</el-menu-item>
    </el-menu>  

    <!-- 根据activeIndex的值显示不同的内容 -->  
    <div v-if="activeIndex === '0'">  
      <el-container>
      <el-aside width="120px">
        <el-menu
        default-active="01"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        >
       
        <el-menu-item index="01" class="menu-item18">
          <span>我要发言</span>
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
        <el-menu-item index="04" class="menu-item18">
          <span>系统通知</span>
        </el-menu-item>
        <el-menu-item index="04" class="menu-item18">
          <span>历史动态</span>
        </el-menu-item>
      </el-menu>

      </el-aside>
      <el-main>Main</el-main>
    </el-container>

      <!-- 新闻动态的内容 -->  
   
      




    </div>  
    <div v-if="activeIndex === '1'">  
      <!-- 公社大厅的内容 -->  
      1122222
    </div>  
    <div v-if="activeIndex === '2'">  
      <!-- 朋友圈子的内容 -->  
      2222222
    </div>  
    <div v-if="activeIndex === '3'">  
      <!-- 共享资料的内容 -->  
3333333
    </div>  
    <div v-if="activeIndex === '4'">  
      <!-- 我的主页的内容 -->  
      <el-container>
      <el-aside width="120px">
        <el-menu
        default-active="01"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        >
       
        <el-menu-item index="41" class="menu-item18">
          <span>我要发言</span>
        </el-menu-item>
        <el-menu-item index="42" class="menu-item18">
          <span>用户动态</span>
        </el-menu-item>
        <el-menu-item index="43" class="menu-item18">
          <span>内容动态</span>
        </el-menu-item>
        <el-menu-item index="44" class="menu-item18">
          <span>互动信息</span>
        </el-menu-item>
        <el-menu-item index="45" class="menu-item18">
          <span>系统通知</span>
        </el-menu-item>
        <el-menu-item index="46" class="menu-item18">
          <span>我的消息</span>
        </el-menu-item>
      </el-menu>

      </el-aside>
      <el-main>Main</el-main>
    </el-container>
    </div>  
    <div v-if="activeIndex === '5'">  
      <!-- 共享服务的内容 -->  
      5555555  
    </div>  
    <div v-if="activeIndex === '6'">  
      <!-- 本站介绍的内容 -->  
      6666666  
    </div>  
    <div v-if="activeIndex === '7'">  
      <!-- 搜索排行的内容 -->  
      7777777  
    </div>  
    <div v-if="activeIndex === '8'">  
      <!-- 搜索排行的内容 -->  
     8888
    </div>  
  </div>  
</template>  
  
<script>  
import { ref } from 'vue'; 
// import { ElMenu, ElMenuItem } from 'element-plus';  
// import 'element-plus/lib/theme-chalk/index.css';  
  
export default {  
//   components: {  
//     ElMenu,  
//     ElMenuItem,  
//   },  
// data() {  
//     return {  
//       activeIndex: '0', // 默认选中新闻动态  
//     };  
//   },  
//   methods: {  
//     handleSelect(index) {  
//       this.activeIndex = index;  
//     },  
//   },  
setup() {  
    const activeIndex = ref('0'); // 默认选中新闻动态  
  
    const handleSelect = (index) => {  
      activeIndex.value = index;  
    };  
  
    return {  
      activeIndex,  
      handleSelect,  
    };  
  },  
};  
</script>

<style>  
.login{width: 1280px;  
      margin: 0 auto;      
    }

.menu-item {  
  font-size: 20px;  
}  
.menu-item18 {  
  font-size: 18px;  
}  
.el-menu-vertical-demo {  
  border-right: none !important;  
}
</style>

