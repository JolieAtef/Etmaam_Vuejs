<template>
  <LogoBar @toggle-dark-mode="isDark = $event"/>
  <Swiper
  @slideChange="onSlideChange"
  :allowTouchMove="true"
  class="mySwiper"
  >
  <SwiperSlide v-for="(index) in routes" :key="index" class="slide">
    <RouterView/>
    <SocialMedia class="social"/>
  </SwiperSlide>
 </Swiper>
 <NavBar/>
</template>

<script>


import LogoBar from './LogoBar.vue';
import SocialMedia from './SocialMedia.vue';
import NavBar from './NavBar.vue';
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'


export default {
  name: 'MainComponent',
  components:{
   LogoBar,
   SocialMedia,
   NavBar,
   Swiper,
   SwiperSlide
  },
  data(){
    return{
    isDark:false,
    currentIndex: 0,
    routes: ['/', '/AboutMe', '/MyVision', '/CareerPath','/Certificates', '/Achievements','/ContactMe']
    }
    },
    watch: {
    isDark(val) {
      val? document.body.classList.add('dark'):document.body.classList.remove('dark');
    }},
    methods: {
    onSlideChange(swiper) {
      const index = swiper.activeIndex
      this.currentIndex = index
      const route = this.routes[index]
      if (this.$route.path !== route) {
        this.$router.push(route)
      }
    }
  }
} 

</script>

<style>
:root{
    --light-primary:#FCF8EC;
    --primary-light-mode:#CF820D;
    --primary-dark-mode:#E4CB86;
    --white:#FFFFFF;
    --dark:#1B1B1B;
    --gray_1:#F5F5F5;
    --gray_2:#CACACA;
    --gray_3:#717171;
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

a{
    text-decoration: none;
    color: inherit;
}

@font-face {
    font-family: 'Somar Sans';
    src: url('../assets/Fonts/SomarSans-Bold.woff2') format('woff2'),
         url('../assets/Fonts/SomarSans-Bold.woff2') format('woff');
    font-weight: bold;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Somar Sans_Medium';
    src: url('../assets/Fonts/SomarSans-Medium.woff2') format('woff2'),
         url('../assets/Fonts/SomarSans-Medium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  h1,h2,h3,h4,h5,h6,p{
    font-family: 'Somar Sans_Medium', sans-serif;
  } 


  body.dark{
    background-color: var(--dark);
  }
  
  body{
    max-width: 1440px;
    max-height:810px;
    margin: auto;
 }

 .social{
   position: absolute;
   top: 30%;
   left: 13%;
   z-index: 10;
 }

</style>