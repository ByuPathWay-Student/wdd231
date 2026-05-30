const np = document.querySelector('#openButton1');
const bronze = document.querySelector('#openButton2');
const silver = document.querySelector('#openButton3');
const gold = document.querySelector('#openButton4');

const memberBox = document.querySelector('#memberDialog');
const memberText = document.querySelector('#memberDialogContainer');
const closeButton = document.querySelector('#closeButton');

const timestamp = document.querySelector('#tStamp');
const form = document.querySelector('#formJoin');

form.addEventListener("submit", () => {
    const time = new Date();
    timestamp.value = time.toLocaleString();
});

np.addEventListener("click", () => {
    memberText.innerHTML = `<p><strong>Non Profit Membership Level:</strong></p><p>Free</p><p>This membership level offers a basic level of benefits. Including basic trainings, and access to our events.</p>`;
    memberBox.showModal();
});

bronze.addEventListener("click", () => {
    memberText.innerHTML = `<p><strong>Bronze Membership Level:</strong></p><p>$5.00 per month</p><p>This membership level offers basic trainings, access to our events, basic advertising, and a 10% event discount.</p>`;
    memberBox.showModal();
});

silver.addEventListener("click", () => {
    memberText.innerHTML = `<p><strong>Silver Membership Level:</strong></p><p>$10.00 per month</p><p>This membership level offers more in depth trainings, access to our events, access to exclusive events, basic advertising, a spotlight position on the homepage, and a 20% event discount.</p>`;
    memberBox.showModal();
});

gold.addEventListener("click", () => {
    memberText.innerHTML = `<p><strong>Gold Membership Level:</strong></p><p>$15.00 per month</p><p>This membership level offers deep trainings, access to our events, access to exclusive events, advertisment help, a spotlight position on the home page, and a 50% event discount.  </p>`;
    memberBox.showModal();
});

closeButton.addEventListener("click", () => {
    memberBox.close();
});