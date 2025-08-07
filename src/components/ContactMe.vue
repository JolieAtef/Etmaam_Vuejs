<template>
<div class="contact_page">
  <transition name="slide-down" appear>
  <div class="contact_above">
    <h3>{{ $t('contact.main_title') }}</h3>
    <div class="contact_social_bar">
            <div class="Social-container">
              <div class="social_11"><a src=""></a></div>
              <div class="social_22"><a src=""></a></div>
              <div class="social_33"><a src=""></a></div>
              <div class="social_44"><a src=""></a></div>
              <div class="social_55"><a src=""></a></div>
             </div>
    </div>
  </div>
</transition>
  <div class="contact_below">
    <transition name="slide-right" appear>
    <div class="contact_right">
      <h3>{{ $t('contact.right_main_title') }}</h3>
      <div class="contact_content">
        <div v-for="n in 3" :key="n" :index="n - 1" class="contact_item">
           <h5>{{ $t('contact.right_title') }}</h5>
           <p>{{ $t('contact.right_paragraph') }}</p>
        </div>
      </div>
    </div>
    </transition>
    <transition name="slide-left" appear>
    <div class="contact_left">
    <form class="contact-form">

      <div class="form_name">

       <div class="form_group">
        <label for="lastName">{{ $t('contact.last_name') }}</label>
        <input type="text" id="lastName" value="">
       </div>

       <div class="form_group">
        <label for="firstName">{{ $t('contact.first_name') }}</label>
        <input type="text" id="firstName">
       </div>

      </div>

    <div class="form_group full-width">
      <label for="email">{{ $t('contact.email') }}</label>
      <input type="email" id="email">
    </div>

    <div class="form_group full-width">
      <label for="message">{{ $t('contact.write') }}</label>
      <textarea id="message" rows="5"></textarea>
    </div>

    <button type="submit" class="submit-btn">{{ $t('contact.submit') }}<span class="arrow">←</span></button>
     </form>
    </div>
  </transition>
  </div>
</div>
<!-- <NavBar :page="6"/> -->
</template>
<script>
// import NavBar from './NavBar.vue';
export default {
  name: 'ContactMe',
  // components:{
  //   NavBar
  // }
}
</script>

<style>
.contact_page{
  min-height: 570px;
  padding-top: 3% ;
  margin: 0% 4%;
  background-color: var(--light-primary);
}
.contact_above {
  text-align: center;
}

.contact_above h3 {
  font-size: 1.8em;
}

.Social-container{
   display: flex;
   flex-direction: row;
   padding-top: 2% ;
   gap: 16px;
   justify-content: center;
}

.Social-container > *{
    width: 22px;
    height: 22px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: center;
    border: none;
}

.social_11{
    background-image: url(../assets/dark/socialMedia/Vector\ \(1\).svg)
}
.social_22{
    background-image: url(../assets/dark/socialMedia/Vector\ \(2\).svg)
}
.social_33{
    background-image: url(../assets/dark/socialMedia/Vector\ \(3\).svg)
}
.social_44{
    background-image: url(../assets/dark/socialMedia/Vector\ \(4\).svg)
}
.social_55{
    background-image: url(../assets/dark/socialMedia/Vector\ \(5\).svg)
}

.contact_below {
  display: flex;
  flex-direction: row-reverse;
  padding: 2% 7% ;
}

.contact_below>*{
  text-align: right;
  width: 50%;
  
}

.contact_right h3{
   font-size: 1.4em;
}

.contact_item h5{
   font-size: 1em;
   color: var(--primary-light-mode);
   margin-top: 6%;
}
.contact_item p{
   font-size: 0.8em;
   padding: 1% 0%; 
}

.contact_left {
  width: 38%;
  box-sizing: border-box;
}

.contact-form {
  max-width: 800px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form_name {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
}

.form_group {
  display: flex;
  flex-direction: column;
  flex: 1 1 45%;  
}

.form_group label {
  margin-bottom: 0.5rem;
  font-family: 'Somar Sans_Medium';
  font-size: 0.9em;
  color: var(--gray_3);
  direction: rtl;
}

input,
textarea {
  padding: 0.5rem;
  border: 1px solid var(--primary-dark-mode);
  border-radius: 3px;
  background-color: var(--light-primary);
  font-size: 1em;
  outline: none;
  transition: border-color 0.2s;
  text-align: right;
  direction: rtl;
  width: 100%;
  box-sizing: border-box;
}

input:focus,
textarea:focus {
  border-color: var(--primary-light-mode);
}

.submit-btn {
  direction: rtl;
  align-self: flex-start;
  background: none;
  border: none;
  color: var(--primary-light-mode);
  font-size: 1.1em;
  cursor: pointer;
  font-weight: 500;
  font-family: 'Somar Sans_Medium';
  transition: transform 0.5s ease;
}


.submit-btn:hover {
  transform: scale(1.2);
}


body.dark .contact_above h3{
  color: var(--white);
}
body.dark .contact_page{
  background-color: black;
}

body.dark .social_11{
    background-image: url(../assets/light/socialMedia/Vector\ \(1\).svg);
}
body.dark .social_22{
    background-image: url(../assets/light/socialMedia/Vector\ \(2\).svg);
}
body.dark .social_33{
    background-image: url(../assets/light/socialMedia/Vector\ \(3\).svg);
}
body.dark .social_44{
    background-image: url(../assets/light/socialMedia/Vector\ \(4\).svg);
}
body.dark .social_55{
    background-image: url(../assets/light/socialMedia/Vector\ \(5\).svg);
}

body.dark .contact_right h3{
  color: var(--white);
}

body.dark .contact_item h5{
   color: var(--primary-dark-mode);
}

body.dark .contact_item p{
    color: var(--gray_2);
}

body.dark .form_group label {
  color: var(--white);
}
body.dark input , body.dark textarea{
  border-color:var(--gray_2);
  background-color:black;
  color: var(--primary-dark-mode);
}

body.dark input:focus {
  border-color: var(--primary-dark-mode); 
}
body.dark textarea:focus {
  border-color: var(--primary-dark-mode); 
}
body.dark .submit-btn {
  color: var(--primary-dark-mode);
}


body.english .contact_below, body.english.dark .contact_below{
  flex-direction: row;
  padding-left: 18%;
  padding-right: 0%;
}

body.english .contact_below>*, body.english.dark .contact_below>*{
  text-align: left;
}

body.english .form_name, body.english.dark .form_name{
  flex-direction: row-reverse;
}

body.english input , body.english.dark input,
body.english textarea , body.english.dark textarea
{
    text-align: left;
}

body.english .form_group label, body.english.dark .form_group label
{
  direction: ltr;
}

body.english .submit-btn, body.english.dark .submit-btn{
  direction: ltr;
  align-self: flex-end;
}


body.english .arrow, body.english.dark .arrow{
 display: inline-block;
 transform: rotate(180deg); 
}


@media(max-width: 1350px){
  .contact_below{
      flex-direction: column;
      padding: 0% 12%;
   }
   .contact_below > *{
      width: 100%;
   }
   .contact_page{
    max-height: none;
    padding: 3% 0;
   }
   .contact_right{
    text-align: center;
    padding: 5% 0%;
   }

body.english .contact_below, body.english.dark .contact_below{
  flex-direction: column;
  padding: 2% 7% ;
  
}

  body.english .contact_below>*, body.english.dark .contact_below >*{
  text-align: center;
  }

body.english .form_group label, body.english.dark .form_group label
{
  text-align: left;
}
}
@media (max-width: 800px) {

.contact_above h3 {
 font-size: 1.2em;
}

.contact_right h3{
   font-size: 1.1em;
}

.form_group {
 min-width: 100%;
}

.submit-btn {
 align-self: stretch;
 text-align: left;
 margin-top: 1rem;
}

body.english .contact_below, body.english.dark .contact_below{
 
  padding: 2% 19% ;
  
}
}

/* Right side comes from the right */
.slide-right-enter-active, .slide-right-appear-active {
  transition: transform 0.7s ease, opacity 0.8s ease;
}
.slide-right-enter-from, .slide-right-appear-from {
  transform: translateX(50px);
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