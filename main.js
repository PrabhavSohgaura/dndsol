$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
      $(".goTop").fadeIn();
    } else {
      $(".navbar").removeClass("sticky");
      $(".goTop").fadeOut();
    }
  });

  $(".goTop").click(function () {
    scroll(0, 0);
  });

  $(".menu-toggler").click(function () {
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });
});

// js code for swiper js
var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
});

// firebase code for storage of email.
var firebaseConfig = {
  apiKey: "AIzaSyDE15KOpM-f2enba0apnlfiEwWQR42foSU",
  authDomain: "dandd-solutions.firebaseapp.com",
  projectId: "dandd-solutions",
  storageBucket: "dandd-solutions.appspot.com",
  messagingSenderId: "709576371649",
  appId: "1:709576371649:web:ab6c08c269df9347211340",
  measurementId: "G-QNY4DQ56SY",
};

firebase.initializeApp(firebaseConfig);

let messagesref = firebase.database().ref("ContactFormmessages");

//listen for form sumbit
document.getElementById("contactForm").addEventListener("submit", submitForm);

//submit form
function submitForm(e) {
  e.preventDefault();
  let fullname = getvalue("fullname");
  let email = getvalue("email");
  let subject = getvalue("subject");
  let message = getvalue("message");

  //save messages
  saveMessage(fullname, email, subject, message);

  //show thank you message after submitting forn
  document.querySelector(".popup").style.display = "block";

  //show message for 3s
  setTimeout(function () {
    document.querySelector(".popup").style.display = "none";
  }, 3000);

  //clear form after submitting
  document.getElementById("contactForm").reset();
}

function getvalue(id) {
  return document.getElementById(id).value;
}

//save the message in the firebase database
function saveMessage(firstname, lastname, problem, message) {
  let newmessagesRef = messagesref.push();
  newmessagesRef.set({
    fullname: fullname,
    email: email,
    subject: subject,
    message: message,
  });
}
