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


