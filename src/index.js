// if("serviceWorker" in navigator){
//     navigator.serviceWorker.register("sw.js").then(registration => {
//         console.log("SW Registered");
//         console.log(registration);
//     }).catch(error => {
//         console.log("SW Registration failed");
//         console.log(error);
//     })
// }


if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}