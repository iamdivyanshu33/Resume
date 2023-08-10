var tmlloading = gsap.timeline();


var a = 0;
function time()
{
    setInterval(function(){
        a = a + Math.floor(Math.random()*20)
        if(a<100)
        {
            document.querySelector("#loader h1").innerHTML = a + "%";
        }
        else{
            a=100;
            document.querySelector("#loader h1").innerHTML = a + "%";
        }}
        , 120);
    // })
}

tmlloading.to("#loader h1" , 
{
    delay:0.5,
    duration:1,
    onStart:time()
})

tmlloading.to("#loader" , {
    top:"-100vh",
    duration:.5,
    delay:.5,
})

const vw = Math.max(document.documentElement.clientWidth);
const vh = Math.max(document.documentElement.clientHeight);
var tml1 = gsap.timeline();

tml1.to("#landingPage" , {
    y:15,
    duration:.8
})

gsap.from("#nav" , {
    y:-100,
    duration:.5
})



gsap.from(".everything , .to-h1 , .anything" , {
    y: 100,
    stagger:.3,
    opacity:0
})

tml1.from("#images>img" , {
    scale:0,
    opacity:0,
    stagger:0.2
})

gsap.from("span" , {
    opacity:0,
    duration:.4,
    backgroundColor:'white',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:25,
    paddingRight:25,
    fontSize:24
})

tml1.from(".scroll-button",{
    y:100,
    duration:.5,
})

tml1.to(".scroll-button",{
    y:10,
    duration:.5,
    yoyo:true,
    repeat:-1
})  

gsap.from(".grow , .your , .business , .online" , {
    x:400,
    scale:0,
    duration:.5,
    opacity:0,
    scrollTrigger: ".grow",
    stagger:.1,
    color:"#A1CCD1",
    scrollTrigger:{
        trigger:"#second-page",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"bottom 110%",
        scrub:5
    }
})

gsap.from(".second-image-1 , .second-image-2" , {
    y:100,
    opacity:0,
    duration:.4,
    scale:0,
    // stagger:.5,
    scrollTrigger:{
        trigger:".second-image-1 , .second-image-2",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"bottom 40%",
        scrub:5
    }
})

gsap.to("#third-page h1" , {
    transform:"translateX(-100%)" ,
    fontWeight:"100",
    // duration:5,
    scrollTrigger:{
        trigger:".page-1",
        scroller:"body",
        scrub:3,
        // markers:true,
        start:"top 0",
        end:"top -180%",
        // end:"bottom 20%",
        pin:true
    }
})

