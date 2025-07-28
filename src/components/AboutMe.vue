<template>
  <div class="about_me_page">
        <div class="about_me_container">
            <transition name="slide-right" appear>
            <div class="about_right">
                <p>{{ $t('about.right_small_title') }}</p>
                <h4>{{ $t('about.right_title') }}</h4>
            </div>
            </transition>
            <transition name="slide-left" appear>
            <div class="about_left">
               <p>{{ $t('about.left_paragraph_1') }}</p>
               <p>{{ $t('about.left_paragraph_2') }}</p>
            </div>
        </transition>
        </div>
  </div>
  <NavBar :page="1"/>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
  name: 'AboutMe',
  components:{
    NavBar
  }
}
</script>

<style>
.about_me_page{
    max-height: 75vh;
}

.about_me_container{
    display: flex;
    flex-direction: row-reverse;
    max-width: 70%;
    margin: auto;
    padding: 4% 0;
}

.about_me_container >*{
     text-align: right;
     width: 50%;
     padding-left: min(5rem ,8%);
     margin: 0 0 5rem;   
}
.about_right> *{
     text-align: right;
}

.about_right> h4{
    padding-top:5% ;
    color:var(--primary-light-mode);
    font-size: 1.2rem;
    font-weight: 600;
}

.about_right> p{
    color:var(--gray_3);
    font-size: 0.9em;
}

.about_left{
    font-size: 1.3em;
    direction: rtl;
    text-align: right;
    text-align: justify;
}

body.dark .about_right> p{
    color: var(--white);
}

body.dark .about_right> h4{
    color: var(--primary-dark-mode);
}

body.dark .about_left {
    color: var(--white);
}  

body.english .about_me_container ,
body.english.dark .about_me_container{
  flex-direction: row;
  
}
body.dark.english .about_right> * , body.dark.english .about_me_container>*,
body.english .about_right> * , body.english .about_me_container>*{
   text-align: left;
   direction: ltr;
}

body.dark.english .about_left p , body.english .about_left p{
  font-size: 0.9em;
  text-align: justify;
}

body.dark.english .about_left  , body.english .about_left {
 padding-left: 0;
}




@media (max-width: 1500px) {

    .about_me_container{
        flex-direction: column;
        padding: 0% 1%;
    }
    .about_me_container>* {
        width: 90%;
        text-align: center;
        margin: 0;
    }
    .about_right> *{
     text-align: center;
     padding: 0;
    }
    
    .about_right p{
      font-size: 0.9rem;
    }
    
    .about_left{
        padding: 2% 0%;
        margin: auto;
    }

    
    body.english .about_me_container ,
    body.english.dark .about_me_container{
    flex-direction: column;
    }

   body.english .about_me_container >*,
    body.english.dark .about_me_container>*{
    text-align: center;
   }

   body.english .about_right>*,
   body.english.dark .about_right>*{
    text-align: center;
   }

   body.dark.english .about_left p , body.english .about_left p{
  font-size: 0.7rem;
  text-align: justify;
  text-align: center;
  } 

}

  @media (max-width: 600px){

    .about_right h4{
        font-size: 0.9rem;
        
    }
    .about_left p{
        font-size: 0.5rem;
    }
    
    body.dark.english .about_left p , body.english .about_left p{
     font-size: 0.5rem;

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