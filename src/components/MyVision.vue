<template>
 <div class="my_vision_page">
  <div class="vision_container">
    <transition name="slide-right" appear>
    <div class="vision_right">
        <img src="../assets/vision_img.svg" alt="الاستاذ ابو فيصل" loading="eager">
    </div>
   </transition>
   <transition name="slide-left" appear>
    <div class="vision_left">
        <p>{{ $t('vision.left_paragraph') }}</p>
    </div>
    </transition>
  </div>
</div>
<NavBar :page="2"/>
</template>
<script>
import NavBar from './NavBar.vue';
export default {
  name: 'MyVision',
  components:{
    NavBar
  }
}
</script>

<style>
.my_vision_page{
    max-height: 75vh;  
    width: 100%; 
    overflow: hidden;
}

.vision_container{
   display: flex;
   flex-direction: row-reverse;
}

.vision_container > *{
   width: 50%;
}

.vision_right{
  height: auto;
}

.vision_right > img {
  width: 100%;
  height: auto;
  object-fit: cover; /* or 'cover' depending on your design */
  display: block;
}

.vision_left{
    font-size: 1.8rem;
    padding: 6%;
    padding-left: 20%;
    text-align: center;  
}

body.dark .vision_left{
    color: var(--white);
}

body.english .vision_left , body.dark.english .vision_left {
  font-size: 1.2rem;
  direction: ltr;
  text-align: justify;
}



@media (width  < 1200px){
  .my_vision_page{
    max-height: 100vh;  
    width: 100%; 
    overflow: hidden;
   }

    .vision_container{
        flex-direction: column;
        margin: auto;
    }
    .vision_left{
        padding: 0;
        font-size: 0.8rem;
        margin: auto;
        padding: 3%  0;
    }
    .vision_right{
        margin: auto;
        align-items: center;
        text-align: center;
    }
    body.english .my_vision_page, body.dark.english .my_vision_page{
     max-height: 120vh;
    }
    body.english .vision_left, body.dark.english .vision_left{
     font-size: 0.8rem;
     text-align: center;
    }

}


@media (width  < 700px){
  body.english .vision_left, body.dark.english .vision_left{
     font-size: 0.65rem;
     text-align: center;
    }
}


/* Right side comes from the right */
.slide-right-enter-active, .slide-right-appear-active {
  transition: transform 0.9s ease, opacity 0.8s ease;
}
.slide-right-enter-from, .slide-right-appear-from {
  transform: translateX(80px);
  opacity: 0;
}
.slide-right-enter-to, .slide-right-appear-to {
  transform: translateX(0);
  opacity: 1;
}

/* Left side comes from the left */
.slide-left-enter-active, .slide-left-appear-active {
  transition: transform 0.9s ease, opacity 0.8s ease;
}
.slide-left-enter-from, .slide-left-appear-from {
  transform: translateX(-80px);
  opacity: 0;
}
.slide-left-enter-to, .slide-left-appear-to {
  transform: translateX(0);
  opacity: 1;
}

</style>