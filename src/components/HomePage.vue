<template>
  <transition name="slide-down">
  <div v-if="showHero" class="hero" >
        <img src="../assets/hero_img.png" alt="الاستاذ ابو فيصل" loading="eager">
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
  margin: auto;
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

.img_content {
  position: absolute;
  top:65%;
  margin: auto;
  width: 100%;
  text-align: center;
  padding: 0.5rem;
}

.img_content .hero_name {
  font-size: clamp(1.8rem, 4vw, 2.65em);
  padding-bottom: 0.8rem;
  color: var(--primary-dark-mode);
}

.img_content .hero_title {
  font-size:  clamp(1.2rem, 4vw, 1.1em);
  padding-top: 0.8rem;
  color: var(--white);
}

hr{
  width: 45%;
  margin: auto;
}

@media (max-width: 1350px){

  body.english .img_content .hero_name, body.english .dark .img_content .hero_name{
  font-size: clamp(1.2rem, 2.5vw, 1.5em);
  }
  body.english .img_content .hero_title, body.english .dark .img_content .hero_title{
  font-size: clamp(0.9rem, 1vw, 0.9em);
}

}

@media (max-width: 650px) {
  .hero {
    max-height: none;
    min-height: 35vh;
  }

  .hero img {
    max-height: none;
    height: auto;
  }
  .img_content {
  position: absolute;
  top: 47%; 
}

.img_content .hero_name {
  font-size: clamp(1.2rem, 3vw, 2.2em);
  padding-bottom: 0.3rem;
}

.img_content .hero_title {
  font-size: clamp(0.2rem, 2vw, 1em);
  padding-top: 0.2rem;
}

body.english .img_content .hero_name, body.english .dark .img_content .hero_name{
  font-size: clamp(0.7rem, 1.2vw, 0.7em);
}

body.english .img_content .hero_title, body.english .dark .img_content .hero_title{
  font-size: clamp(0.6rem, 0.8vw, 0.6em);
}

body.english .img_content , body.english .dark .img_content {
  top: 49%;
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