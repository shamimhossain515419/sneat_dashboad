// Get the element by ID
var toggleButton = document.getElementById("toggleButton");
var unactiveNavbar = document.getElementById("unactiveNavbar");
var activeNavbar = document.getElementById("activeNavbar");
var openSidebar = document.getElementById("openSidebar");
var sidebar = document.getElementById("sidebar");
var closeSidebar = document.getElementById("closeSidebar");

// Check if the element is found
toggleButton.onclick = () => {
     unactiveNavbar.classList.remove('hidden');
     unactiveNavbar.classList.add('flex');
     activeNavbar.classList.add('hidden');

};
closeSearchbar.onclick = () => {
     unactiveNavbar.classList.add('hidden');
     activeNavbar.classList.remove('hidden');
     activeNavbar.classList.add('flex');
};

openSidebar.onclick = () => {
     sidebar.classList.add("w-[358px]");
     sidebar.classList.remove("hidden");
     openSidebar.classList.add("hidden");
     closeSidebar.classList.remove("hidden");
     closeSidebar.classList.add("block");
}
closeSidebar.onclick = () => {
     sidebar.classList.remove("w-[358px]");
     sidebar.classList.add("hidden");
     closeSidebar.classList.add("hidden");
     openSidebar.classList.remove("hidden");
     openSidebar.classList.add("block");
}


// script.js
// script.js


// Dropdown menu 


const clickFrom = document.getElementById("clickform")

const dropdownForm = document.getElementById("dropdownform")
const arrowIcons = document.getElementById("arrowIcons")

clickFrom.onclick = () => {
     dropdownForm.classList.toggle("h-full");
     arrowIcons.classList.toggle("fa-angle-up")
     arrowIcons.classList.remove("fa-align-left")

}
//  dropdown chart 
const clickCharts = document.getElementById("clickCharts")
const dropdownCharts = document.getElementById("dropdownCharts")
const chartArrow = document.getElementById("chartArrow")
clickCharts.onclick = () => {
     dropdownCharts.classList.toggle("h-full");
     chartArrow.classList.toggle("fa-angle-up")
     chartArrow.classList.remove("fa-align-left")

}