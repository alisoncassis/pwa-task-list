if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-workers.js').then(function(reg) {
        console.log('Successfully registered service worker', reg);
    }).catch(function(err) {
        console.log('Error whilst registering service worker', err);
    });
}