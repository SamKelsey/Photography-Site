// Selectors
form = document.getElementById("contact-form");
submitButton = document.getElementById("submit-button");

const successMessage = "We have received your message!";
const failMessage = "Oops! Something went wrong, try again later.";
const newPara = document.createElement("p");

// submitButton.addEventListener("click", (e) => {
//   const inputName = form.elements[0].value;
//   const inputEmail = form.elements[1].value;
//   const inputMessage = form.elements[2].value;

//   const data = {
//     name: inputName,
//     email: inputEmail,
//     message: inputMessage,
//   };

//   const otherParams = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//     method: "POST",
//   };

//   fetch("/send_email", otherParams)
//     .then((data) => {
//       return data.json();
//     })
//     .then((res) => {
//       const statusCode = res.message[0] + res.message[1] + res.message[2];
//       if (statusCode == 20) {
//         form.reset();
//         newPara.innerText = successMessage;
//         newPara.style.fontWeight = 700;
//         form.appendChild(newPara);
//       } else {
//         newPara.innerText = failMessage;
//         newPara.style.fontWeight = 700;
//         form.appendChild(newPara);
//       }
//     });
// });

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
