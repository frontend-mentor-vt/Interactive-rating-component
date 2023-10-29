function setUpAssessment() {
  const button = document.querySelector("[type=submit]");
  const container = document.querySelector(".container");
  const assessmentList = document.querySelectorAll(".assessment-item");

  let result = "";
  assessmentList.forEach((el) => {
    el.addEventListener("click", (event) => {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
      } else {
        assessmentList.forEach((item) => item.classList.remove("active"));
        el.classList.add("active");
      }
      result = event.target.innerText;
    });
  });

  button.addEventListener("click", () => {
    if (result === 0 || result === "") return;
    container.innerHTML = "";
    const newElement = `
    <section class="submited-section">
    <div class="image-wrapp">
      <img src="./images/illustration-thank-you.svg" alt="" />
    </div>
    <p class="selected-info">You selected ${result} out of ${assessmentList.length}</p>

    <h1 class="title">Thank you!</h1>
    <p class="description">
      We appriciate you taking the time to give a rating. If you ever need
      more support, don't hesitate to get in touch!
    </p>
  </section>
  `;

    container.insertAdjacentHTML("afterbegin", newElement);
  });
}

setUpAssessment();
