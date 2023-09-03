// active li
let lis = document.querySelectorAll("ul li");

lis.forEach(function (ele) {
  ele.onclick = function () {
    lis.forEach(function (e) {
      e.classList.remove("active-link");
    });
    this.classList.add("active-link");
  };
});

// widow scroll up
let btn = document.querySelector(".Up");

window.onscroll = function () {
  if (window.scrollY >= 800) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// validation contact
let form = document.querySelector(".form");

form.onsubmit = function (e) {
  let valid = false;

  let inputName = document.querySelector(".inputName");
  let email = document.querySelector(".email");
  let Subject = document.querySelector(".Subject");
  let Message = document.querySelector(".Message");

  if (inputName.value !== "" && inputName.value.length >= 5) {
    valid = true;
  }

  if (email.value !== "" && Subject.value !== "" && Message.value !== "") {
    valid = true;
  }

  if (valid === false) {
    e.preventDefault();
  }
};
