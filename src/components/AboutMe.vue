<template>
  <div class="about_me_page">
        <div class="about_me_container">
            
            <transition name="slide-right" appear>
            <div class="about_right">
                <p>هذا النص مثال لعنوان يوضع في المكان </p>
                <h4>هذا النص مثال لعنوان يوضع في المكان يوضح طول فقرة لعنوان معين يشرح امتداد الفقرة لعدة اسطر</h4>
            </div>
            </transition>
            <transition name="slide-left" appear>
            <div class="about_left">
                <p>هذا النص هو مثال لنص يمكن أن يُستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق.</p>

                <p>إذا كنت تحتاج إلى عدد أكبر من الفقرات، يتيح لك مولد النص العربي زيادة عدد الفقرات كما تريد، النص لن يبدو مقسمًا ولا يحوي أخطاء لغوية.</p>
              
                <p>مولد النص العربي مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل في كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.</p>
              
                <p>ومن هنا وجب على المصمم أن يضع نصوصًا مؤقتة على التصميم ليُظهر للعميل الشكل كاملاً.</p>
              
                <p>دور مولد النص العربي أن يُوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذي يتحدث عنه التصميم، فيظهر بشكل لا يليق.</p>
              
                <p>هذا النص هو مثال لنص يمكن أن يُستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق.</p>
              
                <p>إذا كنت تحتاج إلى عدد أكبر من الفقرات، يتيح لك مولد النص العربي زيادة عدد الفقرات كما تريد، النص لن يبدو مقسمًا ولا يحوي أخطاء لغوية.</p>
              
                <p>مولد النص العربي مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل في كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.</p>              

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
     padding-left: 6%;
     
}
.about_right> *{
     text-align: right;
}


.about_right> h4{
    padding-top:5% ;
    color:var(--primary-light-mode);
    font-size: 1.6em;
    font-weight: 600;
    
}
.about_right> p{
    color:var(--gray_3);
    font-size: 0.9em;
    
}

.about_left{
    font-size: 0.9em;
    direction: rtl;
    text-align: right;
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


@media (max-width: 1500px) {

    .about_me_page{
    max-height: none;
    }
    .about_me_container{
        flex-direction: column;
    }
    .about_me_container>*{
        width: 90%;
        text-align: center;
        padding: 0% 10%;
    }
    .about_right> *{
     text-align: center;
    }
    .about_right h4{
        margin-bottom: 3%;
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