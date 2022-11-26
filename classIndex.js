class Home {
  constructor() {
    console.log("Contructor", this);
    this.countBtn = document.getElementById("countBtn");
    this.previewOpenBtn = document.getElementById("previewOpenBtn");
    this.previewCloseBtn = document.getElementById("previewCloseBtn");
    this.getQuizzesBtn = document.getElementById("getQuizzesBtn");
    this.countValue = 0;
    this.setCount(this.countValue);
    this.events();
  }

  events() {
    this.countBtn.addEventListener("click", this.increaseCount.bind(this));
    this.previewOpenBtn.addEventListener("click", () => this.openPreview());
    this.previewCloseBtn.addEventListener("click", () => this.closePreview());
    this.getQuizzesBtn.addEventListener("click", () => this.getQuizzes());
  }

  // getQuizzes() {
  //   fetch("https://localhost:7034/home/indexJson")
  //     .then((response) => {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }

  async getQuizzes() {
    const response = await fetch("https://localhost:7034/home/indexJson");
    const quizzes = await response.json();
    this.setTableContent(quizzes);
  }

  setTableContent(quizzes) {
    const table = document.getElementById("indexTable");
    const tableBody = table.querySelector("tbody");

    for (let i = 0; i < quizzes.length; i++) {
      const html = `<tr>
        <th>${i + 1}</th>
        <td>${quizzes[i].name}</td>
        <td>${quizzes[i].description}</td>
        <td>${quizzes[i].createdAt}</td>
      </tr>`;
      tableBody.insertAdjacentHTML("beforeend", html);
    }
  }

  setCount() {
    const count = document.getElementById("count");
    count.innerHTML = this.countValue;
  }

  increaseCount() {
    this.countValue++;
    this.setCount();
  }

  openPreview() {
    const preview = document.getElementById("preview");
    preview.classList.add("show");
  }

  closePreview() {
    const preview = document.getElementById("preview");
    preview.classList.remove("show");
  }
}

window.onload = () => new Home();
