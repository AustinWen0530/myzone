---
home: true
heroImage: '/vuepress/background.jpg'
faceImage: '/vuepress/head.png'
heroImageStyle: {
  maxWidth: '680px',
  width: '100%',
  display: block,
  margin: '14% auto -16% auto',
  //border: '1px dashed #000',
  box-shadow: '8px 8px 20px #022',
  borderRadius: '10px',
}
isShowTitleInHome: true
actionText: '开启进阶之路'
actionLink: /views/
features:
- title: 
  details: be self-disciplined.
---

<!-- <Clock/> -->

<!-- <CanvasNest color='0,23,255' zIndex='-2'></CanvasNest> -->

<script>
  
</script>

<style lang="stylus">
.home .content__default:not(.custom) {
  max-width: 100% !important;
  margin: 0  !important;
  padding: 0 !important;
}
.home .hero h1 {
    display: none;
}
.home img {
   transform: scale(0.8,0.8) !important;
   transition: all 1s!important;
}
.home img:hover {
   //transform: scale(1)!important;
   transition:all 2s !important;
}
.home .features {
    text-align: center;
}
.home .feature p {
    color: #476582 !important;
    font-size: 20px;
}
.home .hero .description {
    color: #FFF !important;
}
.wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    min-height: 10vh;
    background: transparent none repeat scroll!important;
    position: fixed;
    top: -120%;
    left: -1%;
}

@media screen and (max-width: 780px) and (min-width: 541px){
  .clock {
    max-width: 230px !important;
    max-height: 230px !important;
    margin-top: 33% !important;
  }
  .home img {
    max-width: 520px !important;
  }
}

@media screen and (max-width: 540px) and (min-width: 481px){
  .clock {
    max-width: 200px !important;
    max-height: 200px !important;
    margin-top: -10% !important;
  }
  .home img {
    margin: 24% auto -6% auto !important;
    max-width: 380px !important;
  }
}

@media screen and (max-width: 480px) and (min-width: 0px){
  .wrap {
    top:-107%;
    transform: scale(0.68,0.58);
  }
  .home img {    
    margin: 24% auto -6% auto !important;
  }
  .home .feature {
    width: 100%;
    text-align: center;
    color: rgb(71, 101, 130) !important;
    padding: 5px !important;
    margin: -12px;
    margin-left: 0px;
  }
  .clock {
    background: rgba(0, 0, 0, 0) none repeat scroll !important;
    background-image: url() !important;
  }
}
.clock {
  width: 300px !important;
  height: 300px !important;
  margin-top: 12%;
  transition: all 2s;
}
.wrap {
  transition: all 2s;
}
.clock:hover {
  transform: scale(0.55) !important;
  transition: all 2s;
}
.wrap:hover {
  transform: scale(1.05) !important;
  transition: all 2s;
}

</style>

