const countBtn = document.getElementById("countBtn");
const count = document.getElementById("count");
const preview = document.getElementById("preview");
const previewOpenBtn = document.getElementById("previewOpenBtn");
const previewCloseBtn = document.getElementById("previewCloseBtn");

window.onload = async () => {
  setCount(0);
  await getQuizzes();
};

async function getQuizzes() {
  const response = await fetch("https://localhost:7034/");
  console.log(response);
  const data = await response.text();
  console.log(data);
}

function setCount(value) {
  count.innerHTML = value;
}

countBtn.addEventListener("click", function () {
  const value = parseInt(count.innerHTML);
  setCount(value + 1);
});

previewOpenBtn.addEventListener("click", () => {
  console.log("open preview");
  //preview.style.display = "block";
  preview.classList.add("show");
});

previewCloseBtn.addEventListener("click", () => {
  console.log("close preview");
  //preview.style.display = "none";
  preview.classList.remove("show");
});
