<template>
<transition name="slide-down" appear>
<div class="hero">
  <img src="../assets/certificates_img.png" alt="الاستاذ ابو فيصل">
</div>
</transition>
<NavBar :page="4"/>
</template>
<script>
import NavBar from './NavBar.vue';
export default {
  name: 'CertificatesPage',
  components:{
    NavBar
  }
}
</script>

<style>
.hero{
    display: flex;
    justify-content: center;
    position: relative;
    max-height: 75vh;

}

/* Transition classes for slide-down effect */
.slide-down-enter-active ,.slide-down-appear-active  {
  transition: transform 0.7s ease, opacity 0.6s ease;
}

.slide-down-enter-from , .slide-down-appear-from  {
  transform: translateY(-50px);
  opacity: 0;
}

.slide-down-enter-to , .slide-down-appear-to{
  transform: translateY(0);
  opacity: 1;
}
</style>