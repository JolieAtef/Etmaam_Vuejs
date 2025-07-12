<template>
<div class="achieve_page">
  <transition name="slide-right" appear>
  <div class="achieve_right">
    <div class="achieve_arrows">
    </div>
    <div class="achieve_content">
       <h6>هذا النص مثال لعنوان يوضع في المكان</h6>
       <h3>هذا النص مثال لعنوان يوضع في المكان يوضح طول</h3>
       <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.</p>
    </div>
  </div>
</transition>
<transition name="slide-left" appear>
  <div class="achieve_left">
    <img alt="Achievements Image" src="../assets/Achieve_img.png">
  </div>
</transition>
</div>
<NavBar :page="5"/>
</template>
<script>

import NavBar from './NavBar.vue';
export default {
  name: 'AchievementsPage',
  components:{
    NavBar
  }
}
</script>

<style>

.achieve_page{
  max-height: 75vh;
  display: flex;
  flex-direction:row-reverse;
}
 
.achieve_page>*{
  width: 50%;
  
}
.achieve_arrows{
    width: 10%;
    height: 8em;
    background-image: url(../assets/light/Up\ Down\ Arrow.png);
    background-repeat: no-repeat;
    background-position: center;
    padding-left: 10%;
    padding-top:40%;
}

.achieve_right{
  display: flex;
  flex-direction: row-reverse;
  text-align: right;
  padding: 12% 8% ;
  ;
}

.achieve_content h6{
  color: var(--gray_3);
  font-size: 1.2em;
  font-weight: 500;
}

.achieve_content h3{
    color: var(--primary-light-mode);
    font-size: 1.8em;
    padding: 2% 0%;
}

.achieve_content p{
    color:var(--dark);
    font-size: 0.8em;
    font-weight: 500;
}

.achieve_left{
padding-left: 5%;
}

.achieve_left> img{
  width: 43vw;      
  height: 37vw;  
}


body.dark .achieve_content h6{
  color: var(--gray_2);
}

body.dark .achieve_content h3{
    color: var(--primary-dark-mode);
}

body.dark .achieve_content p{
    color:var(--white);
}

body.dark .achieve_arrows{
    width: 10%;
    height: 8em;
    background-image: url(../assets/dark/Up\ Down\ Arrow\ dark.png);
    background-repeat: no-repeat;
    background-position: center;
    padding-left: 12%;
    padding-top:35%;
}

@media ((max-width: 1200px)) {
       .achieve_page{
        flex-direction: column;
        max-height: none;
        padding: 0 12%;
       }
       .achieve_page >*{
        text-align: center;
        width: 100%;
       }
       .achieve_right{
        padding: 5% 10% ;
       }
       .achieve_content h3{
            font-size: 1.6em;
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