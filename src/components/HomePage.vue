<template>
  <transition name="slide-down">
  <div v-if="showHero" class="hero">
        <div class="hero_img">
        <img src="../assets/hero_img.svg" alt="الاستاذ ابو فيصل" loading="eager">
        </div>
        <div class="img_content">
          <h2 class="hero_name">{{ $t('hero.name') }}</h2>
          <hr>
          <h2 class="hero_title">{{ $t('hero.title') }}</h2>
        </div>
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

.hero {
  position: relative;
  width: 100%;
  max-height:  75vh;
  overflow: hidden;
}

.hero_img{
  text-align: center;
}

.hero > *{
  margin: auto;
  align-content: center;
}

.hero img {
  text-align: center;
  width: 85%;
  height: auto;
  max-height: 570px;
  object-fit: contain;
}

.img_content {
  position: absolute;
  top:65%;
  margin: auto;
  width: 100%;
  text-align: center;
  padding: 0.5rem;
}

.img_content .hero_name {
  font-size: clamp(1.6rem, 3vw, 1.8em);
  padding-bottom: 0.55rem;
  color: var(--primary-dark-mode);
}

.img_content .hero_title {
  font-size:  clamp(1rem, 2vw, 1.2em);
  padding-top: 0.5rem;
  color: var(--white);
}

hr{
  width: 45%;
  margin: auto;
}

@media (max-width: 1350px){
  /* .hero {
    max-height: none;
    min-height: 38vh;
  }
   */
  /* .img_content {
    top: 56%;
  }

  /* .img_content .hero_name{
    font-size: 1.1em;
  }

  .img_content .hero_title{
    font-size: 0.9em;
  } */ */

  body.english .img_content .hero_name, body.english .dark .img_content .hero_name{
  font-size: clamp(1.2rem, 2.5vw, 1.5em);
  }
  body.english .img_content .hero_title, body.english .dark .img_content .hero_title{
  font-size: clamp(0.75rem, 1vw, 0.9em);
}

}

@media (max-width: 700px) {

.img_content .hero_name {
  font-size: clamp(0.9rem, 3vw, 2.2em);
  padding-bottom: 0.3rem;
}

.img_content .hero_title {
  font-size: clamp(0.15rem, 2vw, 1em);
  padding-top: 0.2rem;
}

body.english .img_content .hero_name, body.english .dark .img_content .hero_name{
  font-size: clamp(0.6rem, 1.2vw, 0.8em);
}

body.english .img_content .hero_title, body.english .dark .img_content .hero_title{
  font-size: clamp(0.55rem, 0.7vw, 0.3em);
  padding: 0 6px ;
  
}

/* body.english .img_content , body.english .dark .img_content {
  top: 49%;
} */

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