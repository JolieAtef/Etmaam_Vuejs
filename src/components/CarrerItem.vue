<template>
    <div class="career_item">
          <h2>1998</h2>
          <h4>{{ $t('career_item.title') }}</h4>
          <p>{{ $t('career_item.paragraph') }}</p>
    </div>
</template>

<script>
export default{
 name:'CareerItem'
}
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
    font-size: 0.68em;
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
}

@media (width  < 1200px){
  .career_item{
    text-align: center;
   }
}

@media (width  < 700px){
  .career_item{
    text-align: center;
    padding: 0%;
    gap:0;
   }
}

</style>

