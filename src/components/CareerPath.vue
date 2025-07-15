<template>
<div class="Career_path_page">
  <transition name="slide-right" appear>
       <div class="career_title">
         <p>{{ $t('career_path.career_small_title') }}</p>
         <h3>{{ $t('career_path.career_title') }}</h3>
       </div>
    </transition>

    <transition name="slide-down" appear>
       <div class="career_items">
        <CarrerItem v-for="n in 6" :key="n" :index="n - 1"/>
       </div>
    </transition>
    </div>

      <NavBar :page="3"/>
</template>
<script>
import CarrerItem from './CarrerItem.vue';
import NavBar from './NavBar.vue';

export default {
  name: 'CareerPath',
  components:{
    CarrerItem,
    NavBar
  }
}
</script>

<style>
.Career_path_page{
    max-height: 75vh;
    max-width: 70%;
    margin: auto;
}

.career_title{
    padding:2% 0% 5%;
    text-align: right;
}

.career_title p{
    font-size: 1em;
    color: var(--gray_3);
    padding-bottom: 1%;
}

.career_title h3{
     font-size: 1.2em;
}
.career_items{
    padding-left: 7%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 5%;
    padding-bottom: 15%;
}

body.dark .career_title p{
   color: var(--gray_2);
}

body.dark .career_title h3{
   color: var(--white);
}

body.english .career_title, body.dark.english .career_title{
     text-align: left;
}

@media (width  < 1250px){

  .Career_path_page{
    min-height: 45vh;
   }
  .career_title{
    text-align: center;
    margin-bottom: 5%;
   }
   .career_items{ 
    gap: 5%;
    grid-template-columns: repeat(2,1fr);
    margin-bottom: 5%;
   }
   body.english .Career_path_page, body.dark.english .Career_path_page{
    min-height: 120vh;
  }
}

@media (width  < 600px){
   .career_items{ 
    grid-template-columns: repeat(1,1fr);
    flex:1;
}

.Career_path_page{
    min-height: 155vh;
   }

   body.english .Career_path_page, body.dark.english .Career_path_page{
    min-height: 210vh;
  }
}

/* Right side comes from the right */
.slide-right-enter-active, .slide-right-appear-active {
  transition: transform 0.7s ease, opacity 0.8s ease;
}
.slide-right-enter-from, .slide-right-appear-from {
  transform: translateX(50px);
  opacity: 0;
}
.slide-right-enter-to, .slide-right-appear-to {
  transform: translateX(0);
  opacity: 1;
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