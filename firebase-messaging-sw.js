importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: 'TU_SENDER_ID'
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    const notificationTitle = 'Nueva historia en StoryUp';
    const notificationOptions = {
        body: payload.data.body,
        icon: 'img/storyup-icon-192.png'
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});
