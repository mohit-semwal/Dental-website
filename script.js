
//  Creating a toggle here
let hamburger =  document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-list");
let hamburgerIcon = document.querySelector(".hamburger-icon");
let closeIcon = document.querySelector(".close-icon");

hamburger.addEventListener("click",()=>{
   navMenu.classList.toggle("active");
   
   if (hamburgerIcon.style.display === "none") {
       hamburgerIcon.style.display = "inline";
       closeIcon.style.display = "none";
   } else {
       hamburgerIcon.style.display = "none";
       closeIcon.style.display = "inline";
   }

})

document.addEventListener("DOMContentLoaded",()=>{
   let navLink = document.querySelectorAll(".nav-list .nav-link");

   navLink.forEach((link)=>{
       let hr = document.createElement("hr");
       link.after(hr);
   });
});
//  toggle end here
