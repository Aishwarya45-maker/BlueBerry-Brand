/*==================================================
BlueBerry Brand - script.js
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

/*==========================================
MOBILE MENU
==========================================*/

const menuBtn=document.querySelector(".menu-btn");
const navLinks=document.querySelector(".nav-links");

if(menuBtn && navLinks){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});

});

}

/*==========================================
STICKY NAVBAR
==========================================*/

const navbar=document.querySelector(".navbar");

if(navbar){

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

navbar.style.background="rgba(255,255,255,.97)";
navbar.style.boxShadow="0 10px 25px rgba(0,0,0,.08)";

}else{

navbar.style.background="rgba(255,255,255,.90)";
navbar.style.boxShadow="0 5px 20px rgba(0,0,0,.05)";

}

});

}

/*==========================================
SCROLL REVEAL
==========================================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

document.querySelectorAll(".fade-up,.zoom-in").forEach(el=>{

observer.observe(el);

});

/*==========================================
BACK TO TOP
==========================================*/

const topBtn=document.getElementById("topBtn");

if(topBtn){

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});

}

/*==========================================
CART COUNTER
==========================================*/

let cartCount=0;

const cartBadge=document.querySelector(".cart-count");

document.querySelectorAll(".cart-btn").forEach(button=>{

button.addEventListener("click",()=>{

cartCount++;

if(cartBadge){

cartBadge.textContent=cartCount;

cartBadge.animate([

{transform:"scale(1.5)"},

{transform:"scale(1)"}

],{

duration:300

});

}

});

});

/*==========================================
WISHLIST
==========================================*/

document.querySelectorAll(".wishlist").forEach(item=>{

item.addEventListener("click",()=>{

const icon=item.querySelector("i");

if(icon){

icon.classList.toggle("fa-regular");
icon.classList.toggle("fa-solid");
icon.classList.toggle("liked");

}

});

});

/*==========================================
NEWSLETTER
==========================================*/

const newsletter=document.querySelector(".newsletter-form");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

const email=newsletter.querySelector("input");

if(email.value.trim()===""){

alert("Please enter your email address.");

email.focus();

return;

}

const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!pattern.test(email.value)){

alert("Please enter a valid email address.");

email.focus();

return;

}

alert("🎉 Thank you for subscribing to BlueBerry!");

newsletter.reset();

});

}

/*==========================================
SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*==========================================
BUTTON RIPPLE EFFECT
==========================================*/

document.querySelectorAll(".btn,.cart-btn").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=(e.clientX-rect.left-size/2)+"px";
ripple.style.top=(e.clientY-rect.top-size/2)+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/*==========================================
PRODUCT IMAGE HOVER
==========================================*/

document.querySelectorAll(".product-card img").forEach(image=>{

image.addEventListener("mouseenter",()=>{

image.style.transform="scale(1.08)";

});

image.addEventListener("mouseleave",()=>{

image.style.transform="scale(1)";

});

});

/*==========================================
PRELOADER (OPTIONAL)
==========================================*/

const loader=document.querySelector(".loader");

if(loader){

window.addEventListener("load",()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},500);

});

}

});
