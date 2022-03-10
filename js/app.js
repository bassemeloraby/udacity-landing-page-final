//-----Start Global variable-----//
//number of sections
let secNumber = 0;
//scroll
let ifScroll;
//select mainSelect
const mainSelect = document.querySelector('main');
//select Ul by Id
const barNav = document.getElementById('navbar__list');
//select button to go to header
const goUp = document.getElementById("to-top");
//select header by class 
const pageHead = document.querySelector(".page__header");
//-----End Global variable----//

//---start launch of functions------//
//creat first 4 sections 
creat4Sec();
//creat navigation links
navItemsCreat();
//start see section and link in view in active class 
secInVeiw();
//start header view in scroll and disapear in no scroll
headerView();
//start scroll smoth
scrollSmoth()
//---End launch of functions------//

//----Start Functions---//
//---function to Add a smooth scrolling effect to a page--//
function scrollSmoth() {
    document.documentElement.style.scrollBehavior = "smooth";
}
//--------function creat first 4 sections using loop-------------//
function creat4Sec() {
    for (let i =1 ;i<5 ;i++ )
    {sectionCreat();}
}
//--------function creat navigation links-------------//
function navItemsCreat() {
    //make html content in navigation bar empty to not dupkicate it evrey time create sections
    barNav.innerHTML = "";
    //selec all sections to make same loop on them automaticaly
    let allsections = document.querySelectorAll('section');
    //loop on ewery section to make its navigation link
    allsections.forEach((section) => {
        //const content of link
        const liContent = `<li><a href='#${section.id}' data-nav="${section.id}" class ="menu__link">${section.dataset.nav}</a></li>`;
        //add it to navigation at beforeend 
        //we can use (insertAdjacentHTML) or (Element appendChild)
        barNav.insertAdjacentHTML("beforeend",liContent);
    }); 
};
//---------function for button move scroll to head of page------------//
function toHeader() {
    //use scroll to
    window.scrollTo(0,100);
}
//---------function to start see section and link in view in active class------------//
function secInVeiw() {
    window.addEventListener("scroll", () => {
        // make loop which work for every section
        document.querySelectorAll("section").forEach((sec, index) => {
            // by getBoundingClientRect
            const inaction = sec.getBoundingClientRect();
            //if to insert active classes 
            if (inaction.top >= 0 && inaction.top < 300) {
                //select section by its data- attribute
                const navForSec = sec.getAttribute("data-nav");
                //add class for section
                sec.classList.add("your-active-class");
                //select all links in avariable
                const allLinks = document.querySelectorAll("a");
                //loop for links
                allLinks.forEach((yLink) => {
                    if (yLink.innerText == navForSec) {
                        //remove active class if not in view
                        allLinks.forEach((noLink) => {
                            noLink.classList.remove("active-link");
                        });
                        //add active class if  in view
                        yLink.classList.add("active-link");
                    }
                });
            } else {
                //remove class from section
                sec.classList.remove("your-active-class");
            }
        });
    });    
}
//--------- function to creat more section------------//
function moreSection() {
    sectionCreat();
    navItemsCreat();   
}
//-------function start header view in scroll and disapear in no scroll--------------//
//function use onscroll and time out to make when ascroll stop give some time and then
//navigationbar disapear and using scrolly to position it 
function headerView() {
    document.onscroll = ()=>{
        pageHead.style.display = "block"
        clearTimeout(ifScroll)
        ifScroll = setTimeout(()=>{
            pageHead.style.display = "none";
        },3000);
    //---//
    if (window.scrollY > 800) {
        goUp.style.display = "block"
    } else {
        goUp.style.display = "none"
    }
    };  
}
//-----function to creat section with content------//
function sectionCreat(){
    //add 1 every time use of function
    secNumber++;
    //section content store in a variable
    const secCont = `<section id="section${secNumber}" data-nav="Section ${secNumber}" >
    <div class="landing__container">
    <h2>Section ${secNumber}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>`;
    //add it to main at beforeend 
   //we can use (insertAdjacentHTML) or (Element appendChild)
    mainSelect.insertAdjacentHTML("beforeend",secCont);
};
//----End Functions---//


