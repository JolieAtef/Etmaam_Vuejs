<template>
   <div class="social_bar">
            <div class="buttons-container">
              <div class="social_1"><a src=""></a></div>
              <div class="social_2"><a src=""></a></div>
              <div class="social_3"><a src=""></a></div>
              <div class="social_4"><a src=""></a></div>
              <div class="social_5"><a src=""></a></div>
             </div>
    </div>
</template>
<script>
export default {
  name: 'SocialMedia'
}
</script>

<style>
.social_bar{
    width: 48px;
    height: 208px;
    background-color:var(--primary-light-mode);
    position: absolute;
    top: 35%; 
    left: 15%; 
   
}

@media (width  < 1300px){
    .social_bar{
        position: fixed;
        left: 0%;
        top:20%
           
    }
}

@media (width  < 600px){
    .social_bar{
        width: 38px;
        top:16%  
    }
}

.buttons-container{
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 10px 0;
   gap: 6px;
   
}

.buttons-container > *{
    width: 32px;
    height: 32px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: center;
    margin: auto;
    border: none;
}

.social_1{
    background-image: url(../assets/light/socialMedia/Vector\ \(1\).png);
}
.social_2{
    background-image: url(../assets/light/socialMedia/Vector\ \(2\).png);
}
.social_3{
    background-image: url(../assets/light/socialMedia/Vector\ \(3\).png);
}
.social_4{
    background-image: url(../assets/light/socialMedia/Vector\ \(4\).png);
}
.social_5{
    background-image: url(../assets/light/socialMedia/Vector\ \(5\).png);
}


body.dark .social_bar{
    background-color: var(--primary-dark-mode);
}

body.dark .social_1{
    background-image: url(../assets/dark/socialMedia/Vector\ \(1\).png)
}
body.dark .social_2{
    background-image: url(../assets/dark/socialMedia/Vector\ \(2\).png)
}
body.dark .social_3{
    background-image: url(../assets/dark/socialMedia/Vector\ \(3\).png)
}
body.dark .social_4{
    background-image: url(../assets/dark/socialMedia/Vector\ \(4\).png)
}
body.dark .social_5{
    background-image: url(../assets/dark/socialMedia/Vector\ \(5\).png)
}

</style>