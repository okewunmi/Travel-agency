/*button counter*/

/** initialization */
let count = 0;

const btn = document.querySelectorAll('.btn');
const value = document.querySelector('.value');

btn.forEach(function(btn){
btn.addEventListener('click', function(e){
 const style = e.currentTarget.classList;
 if (style.contains('increase')){
count++;
}
else if (style.contains('decrease')){
 count--;
}

else {
count = 0;
}

if(count < 0){
count = 0;
}

value.textContent = count;
})
});

/*end of button counter */

/** background nav button  */
 // const btnNav = document.querySelectorAll('.button__nav');
 // const header = document.querySelector('.header');
 // btnNav.forEach(function(btnNav){
 //  btnNav.addEventListener('click', function(e){
 //   const style = e.currentTarget.classList;
 //   if (style.contains('btn--nav-1')){
 //    document.querySelector('.header').style.backgroundImage = "url('background2.jpeg')";
    
 //    // header.classList.add("backgrd--1");
 //   }
 //   else if (style.contains('btn--nav-2')){
 //    header.classList.add("backgrd--3");
 //    // document.querySelector('.header').style.backgroundImage = "url(initial)";
 //   }
 //   else if (style.contains('btn--nav-3')){
 //    header.classList.add("backgrd--4");
 //   }
 //   else {
 //    document.querySelector('.header').style.backgroundImage = "url(initial)";

 //   }

 //  })
 // });


 /**start of the  testimony nav*/
 

