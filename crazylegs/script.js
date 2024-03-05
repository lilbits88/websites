function toggleMenu(){
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".burger-icon");
  const dropdown = document.querySelector(".dropdown-content");
  menu.classList.toggle("open")
  icon.classList.toggle("open") 
  dropdown.classList.toggle("open")
} 


