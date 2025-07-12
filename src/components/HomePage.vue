<template>
  <transition name="slide-down">
  <div v-if="showHero" class="hero" >
        <img src="../assets/hero_img.png" alt="الاستاذ ابو فيصل">
  </div>
 </transition>
  <NavBar :page="0"/>

</template>
<script>
import NavBar from './NavBar.vue';

 export default {
  name: 'HomePage',
  components:{
    NavBar
  },
  data(){
    return{
      showHero: false
    }
  },
  mounted(){
      this.showHero = true;
  }
}
</script>

<style>
 /* .hero{
    display: flex;
    justify-content: center;
    position: relative;
    max-height: 75vh;

}

@media ( width  < 700px) {
  .hero{
  max-height: none;
  }
} */

.hero {
 
  margin: auto;
  align-items: center;
  position: relative;
  width: 100%;
  max-height:  75vh;
  overflow: hidden;
}

.hero img {
  width: 100%;
  height: auto;
  max-height: 570px;
  object-fit: contain;
}

@media (max-width: 600px) {
  .hero {
    max-height: none;
    min-height: 60vh;
  }

  .hero img {
    max-height: none;
    height: auto;
  }
}

/* Transition classes for slide-down effect */
.slide-down-enter-active {
  transition: transform 0.9s ease, opacity 0.6s ease;
}

.slide-down-enter-from {
  transform: translateY(-70px);
  opacity: 0;
}

.slide-down-enter-to {
  transform: translateY(0);
  opacity: 1;
}



</style>