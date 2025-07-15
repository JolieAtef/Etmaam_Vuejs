<template>
 <div class="my_vision_page">
  <div class="vision_container">
    <transition name="slide-right" appear>
    <div class="vision_right">
        <img src="../assets/vision_img.png" alt="الاستاذ ابو فيصل" loading="eager">
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
}
.vision_container{
   
   display: flex;
   flex-direction: row-reverse;
}

.vision_container > *{
   width: 50%;
}

.vision_right > img {
    width: 50vw;      
    height: 37vw;    
}

.vision_left{
    font-size: 2.02em;
    padding: 6%;
    text-align: center;
    margin-left: 13%;
}

body.dark .vision_left{
    color: var(--white);
}

body.english .vision_left, body.dark.english .vision_left{
  font-size: 1.4em;
}



@media (width  < 1200px){

    
    .vision_container{
        flex-direction: column;
    }
    .vision_left{
        font-size: 1.2em;
        margin: auto;
        padding-top: 2%;
    }
    .vision_right{
        margin: auto;
        align-items: center;
    }
    body.english .my_vision_page, body.dark.english .my_vision_page{
     min-height: 80vh;
    }
    body.english .vision_left, body.dark.english .vision_left{
     font-size: 1.2em;
    }

}


@media (width  < 700px){
  body.english .my_vision_page, body.dark.english .my_vision_page{
     min-height: 110vh;
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