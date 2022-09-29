
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
let count = 1;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// using createSection function to creat and add new section to the main tag

function createSec() {
  const htmlElement = `<section id="section${count}" data-nav="Section ${count}" >
    <div class="landing__container">
      <h2>Section ${count}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

      <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
  </section>`;
  document.getElementById("mainContent").insertAdjacentHTML("beforeend", htmlElement);
};

// build the nav
const nav_Bar = document.getElementById("navbar__list");
const createNav_Items = () => {
  const listItem = `<li><a href="#section${count}" id="navItem${count}" data-nav="section${count}" class="menu__link"> Section ${count}</a></li>`;
  nav_Bar.insertAdjacentHTML("beforeend", listItem);
  ;
};

const removeSec = () => {
  count--;
  document.getElementById("section" + count).remove();
  document.getElementById("navItem" + count).remove();

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
  count++;
});
document.getElementById("btn2").addEventListener("click", () => {
  if (count <=2) { window.alert("The website has to have at least one section") }
  else {
    removeSec();
  }
});






// Scroll to anchor ID using scrollTO event
//i used id and anchore's href in html to do this event 
/**
  shortcut this code by using CSS (html{ scroll-behavior: "smooth"})
 */

 nav_Bar.addEventListener("click",function (e)  {
  e.preventDefault();
  let navBarLink = document.getElementById(`${e.target.dataset.nav}`);
  if(e.target.dataset.nav){
  
      navBarLink.scrollIntoView({ behavior: "smooth" })
 
}});

/**
 * End Main Functions
 * Begin Events
 * 
*/

// save the icon used to go to the top and the header in variables
const toTop = document.getElementById("toTop");
const toBottom = document.getElementById("toDown");
// save the icon used to go to the bottom and the footer in variables
const header = document.querySelector(".main__hero");
const footer = document.querySelector(".page__footer");


// Clicking on this button the document will scroll to the top smoothly
toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 100,
    left: 100,
    behavior: 'smooth'
  });
});
// Clicking on this button the document will scroll to the top smoothly
toBottom.addEventListener("click", () => {
  footer.scrollIntoView({ behavior: "smooth" });
});



// Build menu 
// create three navbarItem by javascript instead of HTML

document.querySelectorAll("section").forEach((section) => {
  const listItem = `<li><a href="#${section.id}" id="navItem${count}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
  nav_Bar.insertAdjacentHTML("beforeend", listItem);
  count++;
});


/**
 disappear the header and appear again when scrolling.
 appearing this button(toTop) after 800px to down
 
 disappearing this button(toBottom) in footer's part
 */
document.onscroll = () => {
  if (window.scrollY > 300) toTop.style.display = "block";
  else toTop.style.display = "none";

  if(count!==1){
    
  window.scrollY < document.getElementById("section"+(count-1)).offsetTop
  ? (toBottom.style.display = "block")
  : (toBottom.style.display = "none");



  }

};


// Set sections as active


// Add class 'active' to section when near top of viewport
// i used offsetTop and offsetHeight to identify the borders of every section
window.onscroll = function () {
  let sections = document.querySelectorAll("section");
  sections.forEach(section => {
    let navBarEle = nav_Bar.querySelector(`[data-nav=${section.id}]`);
    let scrollPosition = document.documentElement.scrollTop;
    (scrollPosition >= (section.offsetTop-50) && scrollPosition < (section.offsetTop + section.offsetHeight-50  ))
      ?
      (section.classList.add("your-active-class"),
        navBarEle.classList.add("active-link"))


      :
      (section.classList.remove("your-active-class"),
        navBarEle.classList.remove("active-link"))

  });


};







