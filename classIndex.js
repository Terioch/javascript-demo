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

  getQuizzes() {
    const response = fetch("https://localhost:7034/home/indexJson")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  // async getQuizzes() {
  //   const response = await fetch("https://localhost:7034/home/indexJson");
  //   const data = await response.json();
  // }

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
