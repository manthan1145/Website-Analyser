/*jslint evil: true */
try {
  if (navigator && "serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then(
      function (registrations) {
        registrations.map(
          function (r) {
            r.unregister();
          }
        );
      }
    );
  }
} catch (e) {}
