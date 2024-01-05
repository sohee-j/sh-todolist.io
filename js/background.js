const cont01 = document.querySelector(".cont01");
const bgBox = cont01.querySelector(".right .bg-box");
const imgBox = bgBox.querySelector(".img-box");
const imgBtn = bgBox.querySelector('.img-btn')

function randomBgHandle(){
  const images = ["bg01.jpg", "bg02.jpg","bg03.jpg","bg04.jpg","bg05.jpg","bg06.jpg","bg07.jpg","bg08.jpg","bg09.jpg","bg10.jpg"]

  const randomImage =images[Math.floor(Math.random() * images.length)]
  const imgId = document.getElementById("img").src;
  img.src = `/image/${randomImage}`
}
imgBtn.addEventListener("click", randomBgHandle)