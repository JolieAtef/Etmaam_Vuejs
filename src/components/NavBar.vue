<template>

<div class="navbar">
          <div class="leftArrow" @click="scrollLeft">
           <a></a>
          </div>
          <div class="nav_btns_wrapper" ref="navWrapper">
          <div class="nav_btns">
            <RouterLink
             v-for="(page, index) in pages"
             :key="index"
             :to="page.route"
              @click="setActive(index)"
              ref="navItems"
             >
            <button :class="{ active: activeIndex === index  }">
            {{ getLabel(page) }}
          </button>
          </RouterLink>
          </div>
          </div>
          <div class="rightArrow" @click="scrollRight">
            <a></a>
          </div>
</div>

</template>

<script setup>


import { ref , onMounted , watch , nextTick} from 'vue'
import { RouterLink , useRoute} from 'vue-router'
import { useI18n } from 'vue-i18n'


const route = useRoute()
const { locale } = useI18n()


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

const navWrapper = ref(null)
const navItems = ref([])
const activeIndex = ref(0)

function scrollLeft() {
  navWrapper.value.scrollBy({ left: -150, behavior: 'smooth' })
}

function scrollRight() {
  navWrapper.value.scrollBy({ left: 150, behavior: 'smooth' })
}

function setActive(index) {
  activeIndex.value = index
}

onMounted(() => {
  scrollToCenter()
})

watch(() => route.path, (newPath) => {
  updateActiveIndex(newPath)
  scrollToCenter()
})

watch(locale, () => {
  scrollToCenter()
})

function updateActiveIndex(path) {
  const currentIndex = pages.findIndex(p => p.route === path)
  if (currentIndex !== -1) {
    activeIndex.value = currentIndex
  }
}

const scrollToCenter = () => {
  nextTick(() => {
    const wrapper = navWrapper.value
    const activeBtn = wrapper?.querySelector('.active')
    if (wrapper && activeBtn) {
      const wrapperRect = wrapper.getBoundingClientRect()
      const btnRect = activeBtn.getBoundingClientRect()
      const offset = btnRect.left - wrapperRect.left - (wrapper.clientWidth / 2) + (btnRect.width / 2)
      wrapper.scrollBy({ left: offset, behavior: 'smooth' })
    }
  })
}


// const page1 = computed(() => {
//   const page = pages[props.page - 1]
//   return page ? { ...page, label: getLabel(page) } : { label: '', route: '/' }
// })
// const page2 = computed(() => {
//   const page = pages[props.page]
//   return page ? { ...page, label: getLabel(page) } : { label: '', route: '/' }
// })
// const page3 = computed(() => {
//   const page = pages[props.page + 1]
//   return page ? { ...page, label: getLabel(page) } : { label: '', route: '/' }
// })

</script> 


<style>

.navbar{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  overflow: hidden;
}


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


.leftArrow a {
  background-image: url('../assets/Left_arrow_dark.png');
}

.rightArrow a {
  background-image: url('../assets/Right_arrow_dark.png');
}

.leftArrow a:hover,
.rightArrow a:hover {
  background-size: 110%;
}


.nav_btns_wrapper {
  overflow-x: auto;
  scroll-behavior: smooth;
  flex: 1;
  max-width: 30vw;
  padding: 0 10%;
  
}

.nav_btns_wrapper::-webkit-scrollbar {
  height: 0px;
}

.nav_btns {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  min-width: max-content;
}

.nav_btns button {
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;
}



.nav_btns button {
  position: relative;
  cursor: pointer;
  width: 135px;
  border: none;
  background-color: inherit;
  font-family: 'Somar Sans', 'sans-serif';
  font-size: 1em;
  font-weight: 700;
  color: var(--gray_2);
  transition: color 0.2s;
  min-width: max-content;
}

.nav_btns button:hover {
  color: var(--primary-light-mode);
}

.nav_btns button::after {
  content: '';
  position: absolute;
  left: 12%;
  bottom: -7%;
  height: 3px;
  width: 76%;
  border-radius: 5px;
  background-color: var(--primary-light-mode);
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
.nav_btns .active {
  color: var(--primary-light-mode);
  
}

body.dark .nav_btns >*{
    color:var(--gray_3);
}

body.dark  button:hover{
    color: var(--primary-dark-mode);
}

body.dark .active{
    color: var(--primary-dark-mode);
}

body.dark .leftArrow a{
    background-image: url(../assets/Left_arrow_white.png);
}

body.dark .rightArrow a{ 
    background-image: url(../assets/Right_arrow_white.png);
}

body.english .nav_btns , body.english .dark .nav_btns{
  flex-direction: row;
}

@media (max-width: 500px) {
  .navbar {
    flex-direction: column;
    align-items: center;
    padding: 5% 2%;
  }

  .nav_btns_wrapper {
   max-width: 50vw;
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
    font-size: 0.6em;
  }
}

</style>