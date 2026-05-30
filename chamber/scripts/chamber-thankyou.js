const formInfo = new URLSearchParams(window.location.search);

document.querySelector('#recipt').innerHTML = `<p><strong>Membership for ${formInfo.get('first')} ${formInfo.get('last')}</strong></p>
<p><strong>Your Email:</strong> ${formInfo.get('emailAdd')}</p>
<p><strong>Your Phone Number:</strong> ${formInfo.get('phone')}</p>
<p><strong>Business Name:</strong> ${formInfo.get('businessName')}</p>
<p><strong>Form Completion Date:</strong> ${formInfo.get('timestamp')}</p>`;