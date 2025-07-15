<template>

<div class="navbar">
          <div class="leftArrow">
           <RouterLink :to="page3.route"></RouterLink>
          </div>
          <div class="nav_btns">
            <RouterLink :to="page3.route"><button>{{page3.label}}</button></RouterLink>
            <RouterLink :to="page2.route"><button >{{page2.label}}</button></RouterLink>
            <RouterLink :to="page1.route"><button>{{page1.label}}</button></RouterLink>
          </div>
          <div class="rightArrow">
            <RouterLink :to="page1.route"></RouterLink>
          </div>
</div>

</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'


const { locale } = useI18n()

const props = defineProps({
  page: Number
})

function getLabel(page) {
  return locale.value === 'en' ? page.labelEn : page.labelAr
}

// List of pages
const pages = [
{ labelAr: 'الرئيسية', labelEn: 'Home', route: '/' },
  { labelAr: 'نبذة عني', labelEn: 'About Me', route: '/AboutMe' },
  { labelAr: 'رؤيتي', labelEn: 'My Vision', route: '/MyVision' },
  { labelAr: 'حياتى المهنية', labelEn: 'Career Path', route: '/CareerPath' },
  { labelAr: 'الشهادات', labelEn: 'Certificates', route: '/Certificates' },
  { labelAr: 'الانجازات', labelEn: 'Achievements', route: '/Achievements' },
  { labelAr: 'تواصل معي', labelEn: 'Contact Me', route: '/ContactMe' }
]


const page1 = computed(() => {
  const page = pages[props.page - 1]
  return page ? { ...page, label: getLabel(page) } : { label: '', route: '/' }
})
const page2 = computed(() => {
  const page = pages[props.page]
  return page ? { ...page, label: getLabel(page) } : { label: '', route: '/' }
})
const page3 = computed(() => {
  const page = pages[props.page + 1]
  return page ? { ...page, label: getLabel(page) } : { label: '', route: '/' }
})
</script> 


<style>

.navbar {

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 56%; 
  box-sizing: border-box;
  padding: 35px 0;
}

/* Arrows */
.leftArrow,
.rightArrow {
  width: 144px;
  height: 36px;
}

.leftArrow a,
.rightArrow a {
  display: inline-block;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  transition: background-size 0.3s ease;
}

/* Arrow backgrounds */
.leftArrow a {
  background-image: url('../assets/Left_arrow_dark.png');
}

.rightArrow a {
  background-image: url('../assets/Right_arrow_dark.png');
}

.leftArrow a:hover,
.rightArrow a:hover {
  background-size: 110%; /* Scale up on hover */
}

/* Navigation buttons container */
.nav_btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Button styling */
.nav_btns button {
  position: relative;
  cursor: pointer;
  width: 135px;
  border: none;
  background-color: inherit;
  font-family: 'Somar Sans', 'sans-serif';
  font-size: 1.1em;
  font-weight: 700;
  color: var(--gray_2);
  transition: color 0.3s;
}

.nav_btns button:hover {
  color: var(--primary-light-mode);
}

.nav_btns button::after {
  content: '';
  position: absolute;
  left: 12%;
  bottom: -25%;
  height: 3px;
  width: 76%;
  border-radius: 5px;
  background-color: var(--primary-light-mode); /* or any color */
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.nav_btns button:hover::after {
  transform: scaleX(1);
}

body.dark .nav_btns button::after{
  background-color: var(--primary-dark-mode);
  
}
body.dark .nav_btns button:hover::after {
  transform: scaleX(1);
}

/* Highlight the middle button */
.nav_btns :nth-child(2) > button {
  color: var(--primary-light-mode);
  
}

body.dark .nav_btns >*{
    color:var(--gray_3);
}

body.dark  button:hover{
    color: var(--primary-dark-mode);
}

body.dark :nth-child(2) > button{
    color: var(--primary-dark-mode);
}

body.dark .leftArrow a{
    background-image: url(../assets/Left_arrow_white.png);
}

body.dark .rightArrow a{ 
    background-image: url(../assets/Right_arrow_white.png);
}


@media (max-width: 900px) {
  .navbar {
    flex-direction: column;
    align-items: center;
    padding: 5% 2%;
  }

  .nav_btns {
    width: 100%;
  }

  .nav_btns button {
    width: 100%;
    font-size: 0.7em;
  }

  .leftArrow,
  .rightArrow {
    display: none;
  }

  body.english .nav_btns button ,body .english.dark .nav_btns button{
    font-size: 0.5em;
  }
}

</style>