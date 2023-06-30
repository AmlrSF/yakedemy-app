you want to add some new cards you have to follow these steps :
1- open the website folder 
2- open up the worksheets images folder and add a new image for you worksheet (preferably higher resolution and bigger size)
3- open up the pdf folder and add your new pdf for the new worksheet card 
4-after all of that is done open the file named "script.js" with a visual editor or even bloc notes or any text editor 
5-scroll down in the script.js file until you find this area of code :
const cards = [
  

];
6-fill out the information for the worksheet and copy paste the code into the const cards table :
 {
        title: "",
        img:"",
        ShortDesc: ``,
        LongDesc : "",
        Pdf :"" ,
    },
title : title of worksheet ; img : the name of the image you have added to the worksheets images folder or a url the image 
both work ; ShortDesc : is the summary that is displayed on the small cards ; LongDesc : is the description displayed on the 
worksheet page , pdf : the path to the pdf file you have added to pdf folder note : you have to type "pdf/name_of_pdf" you have 
to replace name_of_pdf by the actual the name
after all of that you should have something like this ;

const cards = [
    {
        title: "math",
        img:"https://static.remove.bg/remove-bg-web/3d75df900686714aa0c3f2ac38a019cdc089943e/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
        ShortDesc: `hello `,
        LongDesc : "I'm baby woke mlkshk wolf bitters live-rabajdfde blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-rabajdfde blue bottle, hammock freegan copper mug whatever cold-pressedI'm baby woke mlkshk wolf bitters live-rabajdfde blue bottle, hammock freegan copper mug whatever cold-pressed",
        Pdf :"pdf/alf.pdf" ,
    },
    {
        title: "bachla",
        img:"https://static.remove.bg/remove-bg-web/3d75df900686714aa0c3f2ac38a019cdc089943e/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
        ShortDesc: `hello `,
        LongDesc : "I'm baby woke mlkshk wolf bitters live-rabajdfde blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-rabajdfde blue bottle, hammock freegan copper mug whatever cold-pressedI'm baby woke mlkshk wolf bitters live-rabajdfde blue bottle, hammock freegan copper mug whatever cold-pressed",
        Pdf :"pdf/alf.pdf" ,
    },
    {
        title: "kaskrout",
        img:"https://static.remove.bg/remove-bg-web/3d75df900686714aa0c3f2ac38a019cdc089943e/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
        ShortDesc: `hello `,
        LongDesc : "I'm baby woke mlkshk wolf bitters live-rabajdfde blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-rabajdfde blue bottle, hammock freegan copper mug whatever cold-pressedI'm baby woke mlkshk wolf bitters live-rabajdfde blue bottle, hammock freegan copper mug whatever cold-pressed",
        Pdf :"pdf/alf.pdf" ,
    }
    
];

every new card is inside of a {}

7-host you website again and should be good to go 
