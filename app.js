// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbYNks_Wbc5ta1DVxK677IUJro28_Xps8",
    authDomain: "razorpay-panels.firebaseapp.com",
    projectId: "razorpay-panels",
    storageBucket: "razorpay-panels.firebasestorage.app",
    messagingSenderId: "414111056846",
    appId: "1:414111056846:web:c0890b7d6a65e416d8e19f",
    measurementId: "G-2JBK6VNVK2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

document.getElementById('enable-notifications').addEventListener('click', () => {
    Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
            messaging.getToken({ vapidKey: "BHuswBQt6E92-HanF_gI4hUqxlqzAdmhP1xT1VNVYIlnmVKtewcB5icZaHbeZCCeqSaqxoTJajx86gMYfShLmbU" })
                .then((token) => {
                    console.log("FCM Token:", token);
                    alert('Notifications Enabled!');
                    // Store the token in your database for later use
                });
        }
    });
});

document.getElementById('add-account').addEventListener('click', () => {
    const type = document.getElementById('account-type').value;
    const name = document.getElementById('account-name').value;
    const number = document.getElementById('account-number').value;
    const ifsc = document.getElementById('ifsc').value;

    const accountItem = document.createElement('div');
    accountItem.classList.add('account-item');
    accountItem.innerHTML = `
        <strong>Account Type:</strong> ${type} <br>
        <strong>Holder Name:</strong> ${name} <br>
        <strong>Account No:</strong> ${number} <br>
        <strong>IFSC:</strong> ${ifsc}
    `;
    document.getElementById('account-list').appendChild(accountItem);

    // Trigger simulated notification after adding account
    sendSimulatedNotification(type);
});

function sendSimulatedNotification(accountType) {
    let min, max;
    if (accountType.toLowerCase() === 'saving') {
        min = 100;
        max = 1000;
    } else if (accountType.toLowerCase() === 'current') {
        min = 1000;
        max = 10000;
    } else if (accountType.toLowerCase() === 'corporate') {
        min = 5000;
        max = 50000;
    } else {
        min = 100;
        max = 1000;
    }

    const amount = Math.floor(Math.random() * (max - min + 1)) + min;

    new Notification('₹' + amount + ' credited to your ' + accountType + ' account', {
        body: `Account successfully linked!`,
        icon: 'logo.png.jpg'
    });
}
