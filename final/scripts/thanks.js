import { artPromts } from "../data/prompt.mjs";
const memberInfo = new URLSearchParams(window.location.search);

const aPrompt = document.querySelector('#aPrompt');

const randomizer = [...artPromts].sort(() => 0.5 - Math.random());
const randomPrompt = randomizer.slice(0, 1);

aPrompt.textContent = randomPrompt;

document.querySelector('#recipt').innerHTML = `<p><strong>Welcome to the club, ${memberInfo.get('first')} ${memberInfo.get('last')}!</strong></p>
<p><strong>Your email:</strong> ${memberInfo.get('emailAdd')}</p>
<p><strong>Subscribed to newsletter:</strong> ${memberInfo.get('newsl')}</p>`