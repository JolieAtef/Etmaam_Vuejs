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
    height: 200px;
    background-color:var(--primary-light-mode);
    position: absolute;
    top: 35%; 
    left: 15%; 
}


.buttons-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    gap: 4px;
    
}

.buttons-container > *{
    width: 32px;
    height: 32px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 15px 16px;
    margin: auto;
    border: none;
}

.social_1{
    background-image: url(../assets/light/socialMedia/Vector\ \(1\).svg);
}
.social_2{
    background-image: url(../assets/light/socialMedia/Vector\ \(2\).svg);
}
.social_3{
    background-image: url(../assets/light/socialMedia/Vector\ \(3\).svg);
}
.social_4{
    background-image: url(../assets/light/socialMedia/Vector\ \(4\).svg);
}
.social_5{
    background-image: url(../assets/light/socialMedia/Vector\ \(5\).svg);
}


body.dark .social_bar{
    background-color: var(--primary-dark-mode);
}

body.dark .social_1{
    background-image: url(../assets/dark/socialMedia/Vector\ \(1\).svg)
}
body.dark .social_2{
    background-image: url(../assets/dark/socialMedia/Vector\ \(2\).svg)
}
body.dark .social_3{
    background-image: url(../assets/dark/socialMedia/Vector\ \(3\).svg)
}
body.dark .social_4{
    background-image: url(../assets/dark/socialMedia/Vector\ \(4\).svg)
}
body.dark .social_5{
    background-image: url(../assets/dark/socialMedia/Vector\ \(5\).svg)
}

@media (width  < 1300px){
    .social_bar{
        width:40px ;
        height: 168px;
        left: 5%;
        top:23%        
    }

    .buttons-container{
    padding: 5px 0;
    gap: 3px; 
    } 

    .buttons-container > *{
     width: 28px;
     height: 28px;
     background-size: 13px 14px;
    }
}

@media (width  < 600px){
    .social_bar{
        width: 30px;
        height: 125px;
        top:16%  
    }

    .buttons-container{
    padding: 8px 0;
    gap:7px; 
    } 

    .buttons-container > *{
     width: 16px;
     height: 16px;
     background-size: 12px 13px;
    }
}
</style>