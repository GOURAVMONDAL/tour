$(window).on('load',function(){
  $('.loader h1').fadeOut('slow');
  setTimeout(function() {
    $('.loader').css('transform','translateY(-100%)')
  },500)
})

window.addEventListener('load',(e) => {
    gsap.to('.top-half',1,{
        opacity:0,
        y:'-100%',
        ease:Power2.easeOut,
    })
    gsap.to('.bottom-half',1,{
        opacity:0,
        y:'100%',
        height:0,
        ease:Power2.easeOut,
    })
})
