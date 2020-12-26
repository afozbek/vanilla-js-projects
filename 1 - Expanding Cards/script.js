console.log('Hello From Script');

const panelList = document.querySelectorAll(".panel");

panelList.forEach(panel => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active")
  })
})

function removeActiveClasses() {
  panelList.forEach(panel => {
    panel.classList.remove("active")
  })
}