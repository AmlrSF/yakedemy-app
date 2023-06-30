//=================navigation bar toggle
const nav = document.querySelector('.nav-links');
const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click',function(){
    nav.classList.toggle('show-nav')
    if (nav.classList.contains('show-nav')) {
        nav.style.height = '300px';
    }else {
        nav.style.height = '0px';
    }
})


//===============load animation cards
// const animationcard = document.querySelectorAll('.card')

const carde = document.querySelectorAll('.carde');

window.addEventListener('DOMContentLoaded' ,function(){
    carde.forEach((ele,i ) => {
        ele.style.animation = 
        `anime 0.4s ease-in forwards ${i / 10}s`
    });
});
//=================loading==============
const animationcards = document.querySelectorAll('.cardAnimation');

//=================add cards to page

const addEle = document.getElementById('addElement');
const removeEle = document.getElementById('removeElment')
const columns = document.querySelector('.columns ')

const cardElement = `

    <div class="carde">
        <div class="img">
            <img src="math.jpg" alt="">
        </div>
        <h1> Single digit addation </h1>
        <div class="contain">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
                quidem non voluptatem id, laborum reiciendis consequatur possimus.
                A, repellat ducimus?
            </p>
        </div>
    </div>

`;
//===========================scroll 
// main div card
let card = document.createElement('div');
card.classList = "carde";

// image div
let cardimg = document.createElement('div');
let img = document.createElement('img');
img.src = "https://wheatlandcrossing.ghsd75.ca/uploads/7370/mathquestions1/1654179538-250w_mathquestions1.jpg";
cardimg.appendChild(img);
cardimg.classList = "img";


// heading h1
let heading = document.createElement('h1')
let text = document.createTextNode('animation card');
heading.appendChild(text)

// paragraph
let container = document.createElement('div')
let paragraph = document.createElement('p');

let paragraphText = document.createTextNode(`
Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
quidem non voluptatem id, laborum reiciendis consequatur possimus.
A, repellat ducimus?`);

paragraph.appendChild(paragraphText)
container.appendChild(paragraph)
container.classList = "contain"

// appending element to parent element
card.append(cardimg);
card.append(heading);
card.append(container);



addEle.addEventListener('click',function(){
    columns.appendChild(card)
});

//===============go to worksheets=================
const workSection = document.getElementById('work');
const gowork = document.querySelector('.gotowork');
const navbar = document.querySelector('.primary-header');

let navbarHeight = navbar.getBoundingClientRect().height;
let navbarWidth = navbar.getBoundingClientRect().width;
let workPos = workSection.offsetTop - navbarHeight;


gowork.addEventListener('click',function(){
    window.scrollTo({
        left:0,
        top:workPos
    })
})

//===============go to services=================
const servicesSection = document.getElementById('services');
const goservices = document.querySelector('.gotoservice');

let servicesPos = servicesSection.offsetTop - navbarHeight;

goservices.addEventListener('click',function(){
    window.scrollTo({
        left:0,
        top:servicesPos
    })
})
//===========================================
//===============fix navbar=========
// const navbarfixOnTop = document.querySelector('.primary-header');
// const lastSection = document.querySelector('.last-section')


// const cardlicked = document.querySelector('.carde');

// cardlicked.addEventListener('click',function(){
//     console
// })
//=======================

// window.addEventListener('scroll',(e)=>{
//     e.preventDefault
//     let navbarHeight = navbar.getBoundingClientRect().height;
//     let navbarWidth = navbar.getBoundingClientRect().width;
//     console.log(navbarWidth)
//     if(navbarWidth < 917){

//         gowork.addEventListener('click',function(){
//             window.scrollTo({
//                 left:0,
//                 top:workPos + 500
//             })
//         })
        
//     }

//     if (navbarWidth < 645){

//     }
// })

window.addEventListener('scroll', reveal);
function reveal(){
  var reveals = document.querySelectorAll('.reveal');
  for (var i = 0; i < reveals.length; i++){
    var win_height = window.innerHeight;
    var reveal_top = reveals[i].getBoundingClientRect().top;
    var reveal_point = 150;
    if (reveal_top < win_height - reveal_point) {
      reveals[i].classList.add('active');
    } //else {
      //reveals[i].classList.remove('active');
    //}
  }
  console.log(sex)
}