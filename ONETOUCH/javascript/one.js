const URL = document.querySelector('[data-url="targt"]');

function a() {
  'use strict';
  if (window.innerWidth <500) {

  URL.setAttribute('src','https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fonetouchengineeringoffice&tabs=timeline&width=300px&height=600px&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId');
   URL.setAttribute('width','300');
     URL.setAttribute('height','600');
  }
  else {
    URL.setAttribute('src','https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fonetouchengineeringoffice%2F&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId');
     URL.setAttribute('width','500');
       URL.setAttribute('height','600');
  }

};
a();
function b() {
  var x = document.getElementById("navbar-example2");
  var y =x.classList.contains("sticky-top")
  if (window.innerWidth >767) {

  if (!y) {
    x.classList.add("sticky-top")
  }

}
else {
    x.classList.remove("sticky-top")
}
}
b();

window.addEventListener("resize",a);
window.addEventListener("resize",b);
