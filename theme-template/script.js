window.addEventListener("load",() =>{
    const data = (new URL (document.location)).searchParams;
    // all of these are strings 
    const title = data.get('title'); 
    const desc = data.get('desc');
    const date = data.get("date");
    const PDF = data.get("pdf");
    // elmenet creation
    // const card = document.createElement("div");
    // const imageDiv = document.createElement("div");
    // const image = document.createElement("img");
    // const h1 = document.createElement("h1");
    // creating h1 elment text node to append it later to h1 element
    // const h1Text = document.createTextNode(title);
   //  const contain = document.createElement("div");
    // const p =document.createElement("p");
    // creating p elment text node to append it later to append it later to p element
    // const Ptext = document.createTextNode(desc);
    // trying to figure out type of text node it says its object
    // alert(typeof Ptext);
    
    // card.className = "carde";
    // imageDiv.className = "img";
   //  contain.className = "contain";
   //  const columns = document.querySelector(".columns");
   //  columns.appendChild(card);
   //  card.appendChild(imageDiv);
    // imageDiv.appendChild(image);
    // card.appendChild(h1);
   //  h1.appendChild(h1Text)
   //  card.appendChild(contain);
   //  contain.appendChild(p);
   // p.appendChild(Ptext );
})
const cards = [
    {
        title: "Arithmetique",
        img:"math.jpg",
        ShortDesc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est culpa beatae sunt assumenda laborum. Velit. `,
        LongDesc : "I'm baby woke mlkshk wolf bitters live-rabajdfde blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-rabajdfde blue bottle, hammock freegan copper mug whatever cold-pressedI'm baby woke mlkshk wolf bitters live-rabajdfde blue bottle, hammock freegan copper mug whatever cold-pressed",
        Pdf :"pdf/alf.pdf" ,
    },
    {
        title: "Arithmetique",
        img:"math.jpg",
        ShortDesc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est culpa beatae sunt assumenda laborum. Velit. `,
        LongDesc : "I'm baby woke mlkshk wolf bitters live-rabajdfde blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-rabajdfde blue bottle, hammock freegan copper mug whatever cold-pressedI'm baby woke mlkshk wolf bitters live-rabajdfde blue bottle, hammock freegan copper mug whatever cold-pressed",
        Pdf :"pdf/alf.pdf" ,
    },
    {
        title: "Arithmetique",
        img:"math.jpg",
        ShortDesc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est culpa beatae sunt assumenda laborum. Velit. `,
        LongDesc : "I'm baby woke mlkshk wolf bitters live-rabajdfde blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-rabajdfde blue bottle, hammock freegan copper mug whatever cold-pressedI'm baby woke mlkshk wolf bitters live-rabajdfde blue bottle, hammock freegan copper mug whatever cold-pressed",
        Pdf :"pdf/alf.pdf" ,
    },
    {
        title: "Arithmetique",
        img:"math.jpg",
        ShortDesc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est culpa beatae sunt assumenda laborum. Velit. `,
        LongDesc : "I'm baby woke mlkshk wolf bitters live-rabajdfde blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-rabajdfde blue bottle, hammock freegan copper mug whatever cold-pressedI'm baby woke mlkshk wolf bitters live-rabajdfde blue bottle, hammock freegan copper mug whatever cold-pressed",
        Pdf :"pdf/alf.pdf" ,
    }, {
        title: "Arithmetique",
        img:"math.jpg",
        ShortDesc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est culpa beatae sunt assumenda laborum. Velit. `,
        LongDesc : "I'm baby woke mlkshk wolf bitters live-rabajdfde blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-rabajdfde blue bottle, hammock freegan copper mug whatever cold-pressedI'm baby woke mlkshk wolf bitters live-rabajdfde blue bottle, hammock freegan copper mug whatever cold-pressed",
        Pdf :"pdf/alf.pdf" ,
    },
    

   
    
];

const content = document.querySelector('.columns');

window.addEventListener("DOMContentLoaded", function () {
    let id = 0;
    let displayCard = cards.map((card) => {
        let getMySource = card.img.startsWith('https') ? card.img : `worksheets images/${card.img}`;
        id = id+1 ;
        console.log(id);
        return `
                <div class="carde" id="${id}" onclick='show(this.id)'>
                    <div class="img" >
                        <img src="${getMySource}" alt="">
                    </div>
                    <h1> ${card.title} </h1>
                    <div class="contain">
                        <p> ${card.ShortDesc} </p>
                        <p class="LongDesc" style = "display : none"> ${card.LongDesc} </p>
                        <p class="pdf" style = "display : none"> ${card.Pdf} </p>
                    </div>
                </div>
        `
        
    })  

    displayCard = displayCard.join("")
    content.innerHTML = displayCard

});


function show(clicked_id){
    
    const parent = document.getElementById(clicked_id);
    const img = parent.querySelector('img');
    //==================
    // const container = document.querySelector('.class="container-content')
    // const h4 = document.createElement('h4');
    // const texth4 = document.createTextNode('fawzi cha9aliya');
    // .innerHTML 
    //===================
    const h1 = parent.querySelector('h1');
    const p = parent.querySelector('.LongDesc');
    const imgSrc = img.src;
    const h1Text = h1.textContent;
    const pText = p.textContent;
    const pdf = parent.querySelector('.pdf').textContent;
    // alert(pdf);
    const WokSheetPage=document.querySelector(".container-content");
    WokSheetPage.querySelector('h1').innerHTML = h1Text;
    WokSheetPage.querySelector('img').src = imgSrc;
    WokSheetPage.querySelector("p").innerHTML =pText;
    WokSheetPage.querySelector("a").href = pdf
    document.getElementsByClassName("home-page")[0].style.display = "none";
    document.getElementsByClassName("services-page")[0].style.display = "none";
    document.getElementsByClassName("worksheets")[0].style.display = "none";
    document.getElementsByClassName("last-section")[0].style.display = "block";
    window.scrollTo(-50,0)
}