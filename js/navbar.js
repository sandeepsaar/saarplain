function toggleDrawer() {
    const drawer = document.getElementById("mobileDrawer");
    drawer.classList.toggle("open");
}

function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function toggleSearchBar() {
    const searchBar = document.getElementById("searchBar");
    searchBar.style.display = searchBar.style.display === "block" ? "none" : "block";
}


function toggleSubmenu(event, submenuId) {
    event.preventDefault();
    const submenu = document.getElementById(submenuId);
    submenu.classList.toggle('open');
  }
  