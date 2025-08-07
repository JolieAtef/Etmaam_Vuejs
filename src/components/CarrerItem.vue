<template>
    <div class="career_item">
          <h2>{{ props.date }}</h2>
          <h4>{{ props.title }}</h4>
          <p>{{ props.paragraph }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
  index: Number,
  date: String,
  title: String,
  paragraph: String
})

</script>

<style>


.career_item{
    text-align: right;
    padding-bottom: 13%;
}

.career_item h2{
    color: var(--primary-light-mode);
    font-size: 1.2em;
}

.career_item h4{
    font-size: 0.9em;
}

.career_item p{
    color: var(--gray_3);
    font-size: 0.8em;
    text-align: justify;
}

body.dark .career_item h2{
    color: var(--primary-dark-mode);
}

body.dark .career_item h4{
    color: var(--white);
}


body.dark.career_item p{
    color: var(--gray_1);
}

body.english .career_item>*, body.dark.english .career_item>*{
     text-align: left;
     font-size: 0.8em;
     text-align: justify;
}

@media (width  < 1200px){
  .career_item h2{
    font-size: 0.9em;
   }

   .career_item h4{
    font-size: 0.8em;
   }
}

@media (width  < 800px){
  .career_item{
    padding: 0%;
    gap:0;
   }
   body.english .career_item p{
    font-size: 0.6em;
   }
}

</style>

