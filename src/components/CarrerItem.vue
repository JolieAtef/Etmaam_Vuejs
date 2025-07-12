<template>
    <div class="career_item">
          <h2>1998</h2>
          <h4>هذا النص مثال لعنوان يوضع في المكان </h4>
          <p>هذا النص مثال لعنوان يوضع في المكان يوضح شرح عن الخبرات  ويكون مكون من عدة اسطر من سطرين الى ثلاثة على الاكثر وذلك يوضح طول الفقرة</p>
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

