<template>
<transition name="slide-down" appear>
<div class="cer_hero">
  <img src="../assets/certificate_img.svg" alt="الاستاذ ابو فيصل" loading="eager">
  <div class="cer_img_content">
    <div class="cer_icon">
      <img src="../assets/certificate_icon.png" alt="certificate icon" loading="eager">
    </div>
    <h4>{{ $t('certificate.content_title') }}</h4>
    <p>{{ $t('certificate.content_paragraph') }}</p>
    <div class="cer_arrows">
      <img src="../assets/up_down_cer_arrows.png" alt="arrows icon" loading="eager">
    </div>
  </div>
</div>
</transition>
</template>
<script>
export default {
  name: 'CertificatesPage',
}
</script>

<style>

.cer_hero{
    margin: auto;
    position: relative;
    height: 570px;
    width: 100%;
    overflow: hidden;
    text-align: center;
}


.cer_hero img {
  width: 71%;
  /* height: auto; */
  height: 570px;
  object-fit: cover;
}

.cer_img_content {
  position: absolute;
  top: 35%;
  margin: auto;
  text-align: center;
  width: 100%; 
  padding: 0 10%;
}

.cer_icon img{
  width: 50px; 
  height: auto;
  margin-bottom: 15px;
}
.cer_arrows img {
  width: 25px; 
  height: auto;
}

.cer_img_content h4 {
  font-size: clamp(1rem, 2vw, 1.2em);
  padding-bottom: 0.6rem;
  color:var(--white);
}

.cer_img_content p {
  font-size:  clamp(0.7rem, 1vw, 0.7em);
  margin-bottom: 2rem;
  color:var(--white);
}

body.english .cer_img_content ,body.english .dark .cer_img_content {
  padding: 0 25%;
}

body.english .cer_img_content p ,body.english .dark .cer_img_content p {
  margin-bottom: 1rem;
}


@media (width  < 1300px){
  
  .cer_img_content {
    padding: 8% 22%;
    /* background-color: aqua; */
  }

  .cer_img_content h4{
    padding-bottom: 0.2rem;
  }

  .cer_img_content p{
    margin-bottom: 5px;
  }

  .cer_icon img{
    width: 40px; 
  }
  .cer_arrows img {
  width: 20px; 
  }

 body.english .cer_img_content ,body.english .dark .cer_img_content {
  top:42%;
  padding: 0 13%;
 }
 body.english .cer_img_content h4 ,body.english .dark .cer_img_content h4 {
  padding-bottom:0rem;
 }
 body.english .cer_img_content p ,body.english .dark .cer_img_content p {
  margin-bottom: 0rem;

 }

}

@media (width  < 700px){
  .cer_img_content {
    top: 44%;
    padding: 0 2%;
  }
  .cer_img_content h4{
    font-size: clamp(0.6rem, 1vw, 0.8em);
  }
  .cer_img_content p{
    font-size:  clamp(0.4rem, 0.6vw, 0.4em);
    margin-bottom: 0px;
    padding: 0 min(12vw,20%);
  }

  .cer_icon img{
  width: 25px; 
  margin-bottom: 0px;
}
.cer_arrows img {
  width: 10px; 
} 
body.english .cer_img_content ,body.english .dark .cer_img_content {
  top:44%;
 }

body.english .cer_img_content p ,body.english .dark .cer_img_content p {
  padding: 0 min(10vw,60%);

 }
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