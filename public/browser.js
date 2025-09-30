const createField = document.getElementById("create-input");

function itemTemplate(data) {
  console.log(data);

  return `
          <li class="text-xl item-text">
              ${data.reja}
              <span class="flex gap-3 items-center justify-between">
                <i class="fa-solid fa-trash-can text-sm cursor-pointer text-red-600 delete-button" data-id="${data._id}"></i>
                <i class="fa-solid fa-pen text-sm cursor-pointer text-blue-800" data-id="${data._id}"></i>
              </span>
          </li>
    `;
}

const form = document
  .getElementById("create-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    axios
      .post("/create-item", { reja: createField.value })
      .then((response) => {
        document
          .getElementById("item-list")
          .insertAdjacentHTML("beforeend", itemTemplate(response.data));
        createField.value = "";
        createField.focus();
      })
      .catch((error) => {
        console.log("ERROR", "Please try again later", error);
      });
  });

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-button")) {
    if (confirm("Are you sure to delete item?")) {
      axios
        .post("/delete-item", { id: event.target.getAttribute("data-id") })
        .then((response) => {
          event.target.parentElement.parentElement.remove();
        })
        .catch((error) => {});
    }
  }

  if (event.target.classList.contains("edit-button")) {
    let userInput = prompt(
      "Qiymat kiriting: ",
      event.target.parentElement.parentElement.querySelector(".item-text")
        .innerHTML
    );
    if (userInput) {
      axios
        .post("/edit-item", {
          id: event.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          event.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerHTML = userInput;
        })
        .catch((error) => {});
    }
  }

  if (event.target.classList.contains("delete-all")) {
    axios
      .post("/delete-all", { delete_all: true })
      .then((response) => {
        document.location.reload();
      })
      .catch((error) => {});
  }
});
