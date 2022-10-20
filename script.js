const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('menu-close')

menuIcon.onclick = function () {
  mobileMenu.classList.toggle('open-mobileMenu');
};

closeIcon.onclick = function (){
    mobileMenu.classList.remove('open-mobileMenu');
}

document.querySelectorAll('.menu').forEach((n) =>
  n.addEventListener('click', () => {
    mobileMenu.classList.remove('open-mobileMenu');
  })
);

const btn1 = document.getElementById('modalbtn1');
const modal1 = document.getElementById('modal1');
const closemodal1 = document.getElementById('closemodal1');

btn1.addEventListener('click' ,() =>{
modal1.classList.add('openbtn1');
});

closemodal1.addEventListener('click' ,() =>{
  modal1.classList.remove('openbtn1');
  });
  
const btn2 = document.getElementById('modalbtn2');
const modal2 = document.getElementById('modal2');
const closemodal2 = document.getElementById('closemodal2');

btn2.addEventListener('click' ,() =>{
modal2.classList.add('openbtn1');
});

closemodal2.addEventListener('click' ,() =>{
  modal2.classList.remove('openbtn1');
  });
    
const btn3 = document.getElementById('modalbtn3');
const modal3 = document.getElementById('modal3');
const closemodal3 = document.getElementById('closemodal3');

btn3.addEventListener('click' ,() =>{
modal3.classList.add('openbtn1');
});

closemodal3.addEventListener('click' ,() =>{
  modal3.classList.remove('openbtn1');
  });

const btn4 = document.getElementById('modalbtn4');
const modal4 = document.getElementById('modal4');
const closemodal4 = document.getElementById('closemodal4');

btn4.addEventListener('click' ,() =>{
modal4.classList.add('openbtn1');
});

closemodal4.addEventListener('click' ,() =>{
  modal4.classList.remove('openbtn1');
  });


