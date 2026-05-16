const lastModified = document.querySelector('#lastMod');
const curryear = document.querySelector('#year');

const currdate = new Date();

const thisyear = currdate.getFullYear();

curryear.textContent = thisyear;
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

const hamburger = document.querySelector('#ham-button');
const navitems = document.querySelector('#navi');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    navitems.classList.toggle('show');
});