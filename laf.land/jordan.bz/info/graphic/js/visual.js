//use :active css for tap events
document.addEventListener("touchstart", function() {},false);


function parallax(){

    var prlx_lyr_1 = document.getElementById('ufo');
    var prlx_lyr_2 = document.getElementById('prlx_mountainTwo');   // mountain
    var prlx_lyr_3 = document.getElementById('prlx_lyr_uvm'); // university building steeple
    var prlx_lyr_4 = document.getElementById('prlx_lyr_bk'); // svg bk stroke animation
    var prlx_lyr_5 = document.getElementById('mailArea');  // letter
  //var prlx_lyr_6 = document.getElementById('fadeBuild'); // failed access to svg dom in <object>

    var prlx_lyr_7 = document.getElementById('dragon');   // far right icon 
    var prlx_lyr_8 = document.getElementById('gitIcon');       // far left icon
    var prlx_lyr_9 = document.getElementById('prlx_section2');   // 2nd viewport left 

    prlx_lyr_1.style.left = -(window.pageXOffset/30)+'%';              // right to left
    prlx_lyr_2.style.marginBottom = -(window.pageXOffset/600)+'%';    // sink 
    prlx_lyr_3.style.marginBottom = -(window.pageXOffset/-95)+'%';   // pop up
    prlx_lyr_4.style.strokeDashoffset = -(window.pageXOffset/-20);  // vary stroke in svg 

    prlx_lyr_5.style.marginBottom = -(window.pageXOffset/-90)+'%',    // move envelope up
              prlx_lyr_5.style.left = -(window.pageXOffset/50)+'%',  // move object left
              prlx_lyr_5.style.zIndex = +(window.pageXOffset/10),   // float over
              prlx_lyr_5.style.opacity = +(window.pageXOffset/350);// value within 0-1 range , fade in


  //prlx_lyr_6.style.opacity = +(window.pageXOffset/350);
    prlx_lyr_7.style.left = +(window.pageXOffset/150)+'%'; // slide forward
    prlx_lyr_8.style.left= -(window.pageXOffset/50)+'%';  //  slide out
    prlx_lyr_9.style.zIndex = +(window.pageXOffset/4);   // float over

      }
      window.addEventListener("scroll", parallax, false);

      var curYPos = 0,
      curXPos = 0,
      curDown = false;


// drag with mouse
window.addEventListener('mousemove', function(e){ 
  if(curDown === true){
    window.scrollTo(document.body.scrollLeft + (curXPos - e.pageX), document.body.scrollTop + (curYPos - e.pageY));
  }
});
window.addEventListener('mousedown', function(e){ curDown = true; curYPos = e.pageY; curXPos = e.pageX; });
window.addEventListener('mouseup', function(e){ curDown = false; });















