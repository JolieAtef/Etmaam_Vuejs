<template>
<div class="achieve_page">
  <transition name="slide-right" appear>
  <div class="achieve_right">
    <div class="achieve_arrows">
    </div>
    <div class="achieve_content">
       <h6>{{ $t('achievement.small_title') }}</h6>
       <h3>{{ $t('achievement.title') }}</h3>
       <p>{{$t('achievement.paragraph')  }}</p>
    </div>
  </div>
</transition>
<transition name="slide-left" appear>
  <div class="achieve_left">
    <img alt="Achievements Image" src="../assets/Achieve_img.svg" loading="eager">
  </div>
</transition>
</div>
<!-- <NavBar :page="5"/> -->
</template>
<script>

// import NavBar from './NavBar.vue';
export default {
  name: 'AchievementsPage',
  // components:{
  //   NavBar
  // }
}
</script>

<style>

.achieve_page{
  height: 570px;
  width: 100%;
  overflow: hidden;
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
  padding: 12% 7% ;
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
  width: 100%;      
  height: 570px; 
  object-fit: cover; 
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

body.english .achieve_page , body.english .dark .achieve_page{
  flex-direction: row;
}

body.english .achieve_right, body.english .dark .achieve_right{
  text-align: left;
  flex-direction: row;
  padding-left: 20%;
  padding-right: 2%;
  align-items: center;
}


@media ((max-width: 1200px)) {
       .achieve_page{
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        max-height: none;
        padding: 0 10%;
       }
       .achieve_page >*{
        text-align: center;
        width: 100%;
        height: 50%;
       }
       .achieve_left{
        overflow: hidden;
        text-align: center;
        padding: 0;
       }
       .achieve_left> img{
        object-fit: cover;
       }
       .achieve_right{
        align-items: center;
        padding: 2% 7% 2% 12% ;
       }
       .achieve_content h6{
            font-size: 1em;
       }

       .achieve_content h3{
            font-size: 1.1em;
       }
       
       .achieve_content p{
            font-size: 0.8em;
       }

       body.english .achieve_page , body.english .dark .achieve_page{
       flex-direction: column-reverse;
       justify-content: center;
      }

      body.english .achieve_right, body.english .dark .achieve_right{
        text-align: center;
        padding: 5% 10% ;
        margin-left: -2%;
      }

      body.english .achieve_right h6, body.english .dark .achieve_right h6{
           font-size:0.7em ;
      }

      body.english .achieve_right h3, body.english .dark .achieve_right h3{
           font-size:0.9em ;
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