const memberInfo = new URLSearchParams(window.location.search);

document.querySelector('#recipt').innerHTML = `<p><strong>Welcome to the club, ${memberInfo.get('first')} ${memberInfo.get('last')}!</strong></p>
<p><strong>Your email:</strong> ${memberInfo.get('emailAdd')}</p>
<p><strong>Subscribed to newsletter:</strong> ${memberInfo.get('newsl')}</p>`