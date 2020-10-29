// Selectors
form = document.getElementById("contact-form");

submitButton = document.getElementById("submit-button");

// Event listeners
submitButton.addEventListener("click", (e) => {
  const inputName = form.elements[0].value;
  const inputEmail = form.elements[1].value;
  const inputMessage = form.elements[2].value;

  const data = {
    name: inputName,
    email: inputEmail,
    message: inputMessage,
  };

  const otherParams = {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    method: "POST",
  };

  fetch("/send_email", otherParams)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      form.reset();
      console.log(res);
    });
});

var slideIndex = 1;
autoShowSlides(slideIndex);

// Called when dot clicked
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function autoShowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  setTimeout(() => {
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    autoShowSlides(slideIndex);
  }, 5000);
}
