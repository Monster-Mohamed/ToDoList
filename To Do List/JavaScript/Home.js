const AddBTN = document.querySelector(".AddBTN");

const inputTask = document.querySelector("input");

const TasksContainer = document.querySelector(".TasksContainer");

const taskName22 = document.querySelector(".taskName22");
AddBTN.addEventListener("click", (eo) => {
  eo.preventDefault();
  const addTask = `
<div class="Task">
    <span class="icon-star icons"></span>
    <p lang="ar" class="taskName22"> ${inputTask.value} </p>
    <div>
        <span class="icon-trash icons"></span>

        <span class="icon-angry2 icons"></span>
    </div>
</div>
`;

  TasksContainer.innerHTML += addTask;

  inputTask.value = ""

});

const Task = document.querySelector(".Task");
TasksContainer.addEventListener("click", (eo) => {
  if (eo.target.className == "icon-trash icons") {
    eo.target.parentElement.parentElement.remove();
  } else if (eo.target.className == "icon-angry2 icons") {
    eo.target.classList.add("dn");

    const addHeart = `<span class="icon-heart icons"></span>`;

    eo.target.parentElement.parentElement
      .getElementsByClassName("taskName22")[0]
      .classList.add("finish");

    eo.target.parentElement.innerHTML += addHeart;
  } else if (eo.target.className == "icon-heart icons") {
    eo.target.parentElement.parentElement
      .getElementsByClassName("taskName22")[0]
      .classList.remove("finish");
    eo.target.classList.add("dn");

    const angryFace = `<span class="icon-angry2 icons"></span>`;

    eo.target.parentElement.innerHTML += angryFace;
  } else if (eo.target.className == "icon-star icons") {
    eo.target.classList.add("starADD");

    TasksContainer.prepend(eo.target.parentElement);
  }



  else if (eo.target.className == "icon-star icons starADD") {
    eo.target.classList.remove("starADD");

  }



});
