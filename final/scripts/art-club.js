const lastMod = document.querySelector('#lastMod');
const currYear = document.querySelector('#currYear');

const hamButton = document.querySelector('#ham-button');
const navItems = document.querySelector('#navi');


const currDate = new Date();
const thisYear = currDate.getFullYear();

currYear.textContent = thisYear;
lastMod.innerHTML = `Last Modification: ${document.lastModified}`;

hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('show');
    navItems.classList.toggle('show');
});