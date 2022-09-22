
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// counter to specify the number of section.
let count = 3;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// using createSection function to creat and add new section to the main tag
 
 const createSec = () => {
    count++;
    const content = `<section id="section${count}" data-nav="Section ${count}">
      <div class="landing__container">
      <h2>Section ${count}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
      
      <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
      </div>
      </section>`;
    document.querySelector("main").insertAdjacentHTML("beforeend", content);
  };
  const removeSec = () => {
    document.getElementById("section" + count).remove();
    document.getElementById("navItem"+count).remove();
    count--;
  };



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// creating more sections by click on the button
document.getElementById("btn").addEventListener("click", () => {
    createSec();
    createNav_Items();
  });
document.getElementById("btn2").addEventListener("click", () => {
    if(count===0){window.alert("there is nosection here")}
    else{removeSec();}
  });

// build the nav
// but I need to remove all items to avoid the duplicating
 const navBar = document.getElementById("navbar__list");
 const createNav_Items = () => {
   navBar.innerHTML = "";
   let count=1;
   document.querySelectorAll("section").forEach((section) => {
     const listItem = `<li><a href="#${section.id}" id="navItem${count}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
     navBar.insertAdjacentHTML("beforeend", listItem);
     count++;
   });
 };



// Scroll to anchor ID using scrollTO event
//i used id and anchore's href in html to do this event 
/**
  shortcut this code by using CSS (html{ scroll-behavior: "smooth"})
 */
/*  navBar.addEventListener("click", (event) => {
     event.preventDefault();
     if (event.target.dataset.nav) {
       document
         .getElementById(`${event.target.dataset.nav}`)
         .scrollIntoView({ behavior: "smooth" });
       setTimeout(() => {
         location.hash = `${event.target.dataset.nav}`;
       }, 200);
     }
   });*/




/**
 * End Main Functions
 * Begin Events
 * 
*/

// save the icon used to go to the top and the header in variables
const toTop = document.getElementById("toTop");
const toBottom = document.getElementById("toDown");
// save the icon used to go to the bottom and the footer in variables
const header = document.querySelector(".page__header");
const footer = document.querySelector(".page__footer");


// Clicking on this button the document will scroll to the top smoothly
toTop.addEventListener("click", () => {
    window.scrollTo(0, 0);
});
// Clicking on this button the document will scroll to the top smoothly
toBottom.addEventListener("click", () => {
    footer.scrollIntoView();
  });
/**
 disappear the header and appear again when scrolling.
 appearing this button(toTop) after 800px to down
 
 disappearing this button(toBottom) in footer's part
 */
let isScrolling;
document.onscroll = () => {
 if(count!== 0){
    
  header.style.display = "block"
  clearTimeout(isScrolling)
   isScrolling = setTimeout(() => {
    header.style.display = "none";
  }, 6000);

  window.scrollY > 800
    ? (toTop.style.display = "block")
    : (toTop.style.display = "none");
  
    window.scrollY < document.getElementById("section"+count).offsetTop
    ? (toBottom.style.display = "block")
    : (toBottom.style.display = "none");
}
};


// Build menu 
// create three navbarItem by javascript instead of HTML
 
 for (let i = 1; i < 4; i++);
 createNav_Items();

  
  



// Set sections as active


// Add class 'active' to section when near top of viewport
// using Element.getBoundingClientRect() instead of Intersection Observer API 
window.onscroll = function() {
	document.querySelectorAll("section").forEach(function(active) {
    let active___Link = navBar.querySelector(`[data-nav=${active.id}]`);
	if(active.getBoundingClientRect().top >= -300 && active.getBoundingClientRect().top <= 100){
    active.classList.add("your-active-class");
    active___Link.classList.add("active-link");  }
    else{
         active.classList.remove("your-active-class");
         active___Link.classList.remove("active-link");    }
	});
}







