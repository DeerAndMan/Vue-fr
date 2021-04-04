<template>
  <a-layout id="homeLayout">

    <!-- 左边导航栏 -->
    <a-layout-sider class="navList" :trigger="null" collapsible v-model="collapsed" >
      <div class="logo">
        <a href="">
          <img src="../assets/logos.png" alt="图标" style="height: 32px; display: inline-block">
          <h1 style="display: inline-block; color: #fff">自定义图标</h1>
        </a>
      </div>
      <!-- 导航菜单 -->
      <a-menu theme="dark" mode="inline" :default-selected-keys="['2']" >
      
        <!-- 导航子菜单 -->
        <a-sub-menu key="sub1" @titleClick="titleClick">
          <span slot="title">
            <a-icon type="mail" />
            <span>Navigation One</span>
          </span>
          <a-menu-item key="11">
            <router-link to="/about" />
            about
          </a-menu-item>
          <a-menu-item key="22">
            <router-link :to="{ name: 'Index'}" />
            index
          </a-menu-item>
          <a-menu-item key="33">
            <router-link :to="{ name: 'Home'}" />
            home
          </a-menu-item>
        </a-sub-menu>
        
      </a-menu>

    </a-layout-sider>

    <!-- 右侧主区域 -->
    <a-layout class="main" :style="!collapsed ? 'margin-left:200px' : 'margin-left:80px'  ">
      <a-layout-header class="homeLayout-header">
        <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          class="triggerIcon headTool"
          @click="() => (collapsed = !collapsed)"/>
          {{'面包屑'}}
      </a-layout-header>

      <a-layout-content class="homeLayout-content">
        <router-view />
      </a-layout-content>

      <a-layout-footer class="homeLayout-footer">
        xxx ©2021 Created by Ant UED with Tu
      </a-layout-footer>

    </a-layout>

    
  </a-layout>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'LayIndex',
  components: { },
  data() {
    return {
      collapsed: false,
    }
  },
  methods: {
    titleClick(){

    }
  }
}
</script>


<style scoped>
/* @import '~@/assets/css/LayIndex.css'; */
#homeLayout {
    min-height: 100vh;
    overflow: auto;
}
.navList{
    position: fixed ;
    height: 100vh;
}
#homeLayout .logo{
    height: 32px;
    background: rgba(255, 255, 255, .2);
    margin: 16px;
    overflow: hidden;
}

.main{
    transition: all 0.5s ease 0s;
}
.homeLayout-header{
    padding: 0 24px;
    font-size: 18px;
    background: #fff;
}
.homeLayout-content{
    margin: 1.5vh 10px 0 10px;
    padding: 10px;
    background: #fff;
    /* height: 95vh;  */
}
.homeLayout-footer{
    height: 1vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>