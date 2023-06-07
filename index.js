document.addEventListener("DOMContentLoaded", function () {
  var prevButton = document.getElementById("latest-highlights-prv-btn");
  var nextButton = document.getElementById("latest-highlights-nxt-btn");
  var slideCount = document.getElementById("latest-highlights-nav-count");
  var currentCount = parseInt(slideCount.innerText);

  prevButton.addEventListener("click", function () {
    if (currentCount > 1) {
      currentCount -= 1;
      slideCount.innerText = currentCount;
    }
    foo();
  });

  nextButton.addEventListener("click", () => {
    if (currentCount < 3) {
      currentCount += 1;
      slideCount.innerText = currentCount;
    }
    foo();
  });

  const foo = () => {
    if (currentCount > 1 && currentCount < 3) {
      prevButton.classList.remove("disabled");
      nextButton.classList.remove("disabled");
    } else if (currentCount == 1) {
      prevButton.classList.add("disabled");
      nextButton.classList.remove("disabled");
    } else if (currentCount == 3) {
      prevButton.classList.remove("disabled");
      nextButton.classList.add("disabled");
    }
  };
});
