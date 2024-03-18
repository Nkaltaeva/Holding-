const gap = 8;

const carousel = document.getElementById("carousel", "carouselsmall"),
  content = document.getElementById("content", "contentsmall"),
  next = document.getElementById("next", "right"),
  prev = document.getElementById("prev", "left");

next.addEventListener("click", (e) => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", (e) => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", (e) => (width = carousel.offsetWidth));

function ValidMail() {
  var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  var myMail = document.getElementById("email").value;
  var valid = re.test(myMail);
  if (valid) output = "Адрес эл. почты введен правильно!";
  else output = "Адрес электронной почты введен неправильно!";
  document.getElementById("message").innerHTML = output;
  return valid;
}

function ValidPhone() {
  var re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
  var myPhone = document.getElementById("phone").value;
  var valid = re.test(myPhone);
  if (valid) output = "Номер телефона введен правильно!";
  else output = "Номер телефона введен неправильно!";
  document.getElementById("message").innerHTML =
    document.getElementById("message").innerHTML + "<br />" + output;
  return valid;
}
