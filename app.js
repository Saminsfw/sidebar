const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".toggle");
const closeBtn = document.querySelector(".close");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
