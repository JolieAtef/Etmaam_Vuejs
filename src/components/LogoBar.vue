<template>
    <div class="logo_container"> 
      <button class="lang_btn btn_size" @click="togglelang"></button>
        <div class="logo"></div>
        <button class="mode_btn btn_size" @click="toggleMode"></button>
    </div>
</template>

<script >
export default {
  name: 'LogoBar',
  data(){
    return{
        isDark:false,
        isEng:false
    }
   },
   computed:{
    lang(){
      return this.$i18n.locale
    }
   },
    methods:{
    toggleMode() {
      this.isDark = !this.isDark
      this.$emit('toggle-dark-mode', this.isDark)
    },
    togglelang() {
      this.$i18n.locale=this.lang==='en'?'ar':'en';
      this.lang==='en'? document.body.classList.add('english'):document.body.classList.remove('english');
    }
  }
}

</script>

<style scoped>
  .logo_container{
    display: flex;
    justify-content: space-between;
    max-height:10%;
    max-width:70%;
    align-items: center;
    margin: auto;
}

.logo_container > *{
  margin: auto;
  width: 56px;
  height: 49px;
  margin: 12px 0;
 
}

.logo_container .logo{
    background-image: url(../assets/light/logo_light.svg);
    background-repeat: no-repeat;
    background-position: center;
}

.btn_size{
  width: 40px;
  height: 40px;
}

.btn_size:hover{
  background-color: #d08616c4;
}

.mode_btn{
    background-image: url(../assets/light/dark\ mode\ Buttons.svg);
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    border-radius: 50%;
    cursor: pointer;
}

.lang_btn{
   
    /* font-family: 'Somar Sans_Medium', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    border: none;
    border-radius: 50%;
    cursor: pointer; */
    
    background-image: url(../assets/light/lang_light.svg);
    background-repeat: no-repeat;
    background-size: 22px 22px;
    background-position: center;
    border: none;
    border-radius: 50%;
    cursor: pointer;
}


body.dark .mode_btn{
    background-color: black;
    background-image: url(../assets/dark/light\ mode\ Buttons.svg);
}


body.dark .lang_btn{
    color: var(--white);
    background-color: black;
    background-image: url(../assets/dark/lang_dark.svg);
}

body.dark .btn_size:hover{
  background-color: #d6bc76;
}

body.dark .logo {
     background-image: url(../assets/dark/logo_dark.svg);
}

@media(width < 1000px){
  .mode_btn,.lang_btn{
    background-size: 17px 17px;
    width:36px ;
    height:36px;
    font-size: 0.8em;
  }
  .logo_container{
    padding-bottom: 1%;
  }

}


</style>