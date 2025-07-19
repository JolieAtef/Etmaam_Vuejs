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
       <CarrerItem v-for="(item, index) in careerItems"
      :key="index"
      :index="index"
      :date="item.date"
      :title="item.title"
      :paragraph="item.paragraph"/>
      </div>
    </transition>
    </div>

      <NavBar :page="3"/>
</template>

<script>
import CarrerItem from './CarrerItem.vue';
import NavBar from './NavBar.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue'

export default {
  name: 'CareerPath',
  components:{
    CarrerItem,
    NavBar
  },
  setup() {
  const { locale, messages } = useI18n()
  const careerItems = computed(() => {
  return messages.value[locale.value].career_item
  })

  return {
    careerItems
   }
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
    font-size: 0.8em;
    color: var(--gray_3);
    padding-bottom: 1%;
}

    
.career_title h3{
     font-size: 1em;
     direction: rtl;
}
.career_items{
    padding-left: 7%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 5%;
    padding-bottom: 15%;
    direction: rtl;
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

body.english .career_items, body.dark.english .career_items{
  direction: ltr;
}

body.english .career_title h3, body.dark.english .career_title h3{
  direction: ltr;
  font-size: 0.9em;
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
    gap: 7%;
    grid-template-columns: repeat(2,1fr);
    margin-bottom: 5%;
   }
   body.english .Career_path_page, body.dark.english .Career_path_page{
    min-height: 100vh;
  }
}

@media (width  < 750px){
   .career_items{ 
    grid-template-columns: repeat(1,1fr);
    flex:1;
}

.Career_path_page{
    min-height: 155vh;
   }

   body.english .Career_path_page, body.dark.english .Career_path_page{
    min-height: 150vh;
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