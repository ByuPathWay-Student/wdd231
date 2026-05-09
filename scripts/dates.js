const curyear = document.querySelector('#currentyear');
const lastmod = document.querySelector('#lastModified');

const currentdate = new Date();
const year = currentdate.getFullYear();

curyear.textContent = year;
lastmod.innerHTML = `Last Modification: ${document.lastModified}`; 