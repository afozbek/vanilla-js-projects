console.log('Hello From Script');
const progress = document.getElementById("progress")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")
const circles = document.querySelectorAll(".circle")


let currentActive = 1

nextBtn.addEventListener("click", () => {
  currentActive++

  if (currentActive > circles.length) {
    currentActive = circles.length
  }

  update()
})

prevBtn.addEventListener("click", () => {
  currentActive--

  if (currentActive < 1) {
    currentActive = 1
  }

  update()
})

function update() {
  circles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add("active")
    } else {
      circle.classList.remove("active")
    }
  })

  const actives = document.querySelectorAll(".active");

  const widthPercentage = ((actives.length - 1) / (circles.length - 1))
  const progressWidth = widthPercentage * 100 + "%"

  progress.style.width = progressWidth;

  if (currentActive === 1) {
    prevBtn.disabled = true;
  } else if (currentActive === circles.length) {
    nextBtn.disabled = true
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}