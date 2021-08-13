
const LIGHT_BOX = document.querySelector('[data-lightbox="lightbox"]');
const LIGHT_BOX_ITEMS=document.querySelectorAll('[data-image-role="trigger"]');
const LIGHT_BOX_img = document.querySelector('[data-image-role="target"]');
const LIGHT_BOX_CLOSE = document.querySelector('[data-close="close"]');
const LIGHT_BOX_NEXT = document.querySelector('.next');
const LIGHT_BOX_PREV = document.querySelector('.prev');
const LIGHT_BOX_light_boxes = document.querySelector('.light-boxes');
let index;
let src_url;
function getPhotos() {
  var thumbnailArray = [].slice.call(LIGHT_BOX_ITEMS);
return thumbnailArray;

}
  var photoArary = getPhotos()
for (let i = 0; i < photoArary.length; i++) {
photoArary[i].addEventListener('click', function () {

index=i
changPhoto() ;
openLightbox()
})

}


function changPhoto() {

 src_url = photoArary[index].getAttribute('data-image-url');
 LIGHT_BOX_img.setAttribute('src',src_url);

}
function openLightbox() {
  'use strict';

  LIGHT_BOX.style.display = "flex";

}
LIGHT_BOX_CLOSE.onclick = function(){
  LIGHT_BOX.style.display="none"
  LIGHT_BOX_img.setAttribute('src'," ");

}

LIGHT_BOX_NEXT.onclick =function() {
if (index==photoArary.length-1 ) {
  index=0;
}  else {
  index++;
}
changPhoto()
}
LIGHT_BOX_PREV.onclick =function () {
if (index==0) {
  index=photoArary.length-1 ;
}  else {
  index--;
}
changPhoto()
}
LIGHT_BOX_img.onclick=function  next() {
if (index==photoArary.length-1 ) {
  index=0;
}  else {
  index++;
}
changPhoto()
}
