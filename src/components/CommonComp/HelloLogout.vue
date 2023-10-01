<template>
    <div class="logo">
      <span>知识人</span>
      <span style="font-size: 16px;">
         你好，xxx，今天是2023年10月11日，你有3条群消息，9条用户聊天信息 - 点击查看 -
      </span>
      <span class="logout19px">
            <a class="a_white">退出</a>
      </span>
    </div>
  </template>
  
  <script>
//   import { ref } from 'vue';
  export default {
    data() {
      return {
        
      };
    },
    methods: {
     
    },
  };
  </script>
  
  <style scoped>
  .logo {
    height: 40px;
    font-size: 40px;
    line-height: 40px;
    color: #FFF;
    background-color: #708090;
    text-align: left;
    padding: 0;
  }
  .logout19px{
	font-size:19px;
	width:60px;
	float:right;
	text-align: center;
	display: inline-block;
	margin-top: 5px;
    /* margin-right:10px; */
}

.a_white{text-decoration: none;cursor:pointer;color:white;}
.a_white:hover{color:orange;}
  </style>