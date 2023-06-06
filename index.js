document.addEventListener("DOMContentLoaded", function () {
  var prevButton = document.getElementById("prv");
  var nextButton = document.getElementById("nxt");
  var slideCount = document.getElementById("latest-highlights-nav-count");
  var currentCount = parseInt(slideCount.innerText);

  prevButton.addEventListener("click", function () {
    if (currentCount > 1) {
      currentCount--;
      slideCount.innerText = currentCount;
      nextButton.disabled = false;
    }

    if (currentCount === 1) {
      prevButton.disabled = true;
    }
  });

  nextButton.addEventListener("click", function () {
    if (currentCount < 3) {
      currentCount++;
      slideCount.innerText = currentCount;
      prevButton.disabled = false;
    }

    if (currentCount === 3) {
      nextButton.disabled = true;
    }
  });
});
