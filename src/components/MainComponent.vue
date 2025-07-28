<template>
 <LogoBar @toggle-dark-mode="isDark = $event"/>
 <div
    class="swipe-wrapper"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
   <RouterView/>
 </div>
 <SocialMedia/>
</template>

<script>


import LogoBar from './LogoBar.vue';
import SocialMedia from './SocialMedia.vue';

export default {
  name: 'MainComponent',
  components:{
   LogoBar,
   SocialMedia
  },
  data(){
    return{
    isDark:false,
    touchStartX: 0,
    touchEndX: 0,
    routeOrder: ['/', '/AboutMe', '/MyVision', '/CareerPath','/Certificates', '/Achievements','/ContactMe'],
    }
  },
  watch: {
    isDark(val) {
      val? document.body.classList.add('dark'):document.body.classList.remove('dark');
    }
  },methods: {
    onTouchStart(e) {
      this.startX = e.touches[0].clientX;
    },
    onTouchEnd(e) {
      this.endX = e.changedTouches[0].clientX;
      this.handleSwipe();
    },
    handleSwipe() {
      const delta = this.endX - this.startX;
      const threshold = 40;
      if (Math.abs(delta) < threshold) {
        return;
      }
      const currentIndex = this.routeOrder.indexOf(this.$route.path);
      console.log('Current route:', this.$route.path, 'Index:', currentIndex);

      if (delta < 0 && currentIndex < this.routeOrder.length - 1) {
        console.log('Swiping left →', this.routeOrder[currentIndex + 1]);
        this.$router.push(this.routeOrder[currentIndex + 1]);
      } else if (delta > 0 && currentIndex > 0) {
        console.log('Swiping right →', this.routeOrder[currentIndex - 1]);
        this.$router.push(this.routeOrder[currentIndex - 1]);
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
 
</style>