const createField = document.getElementById("create-input");

function itemTemplate(data) {
  console.log(data);

  return `
        <li>
            ${data.reja}
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
        console.log("ERROR", "Please try again later");
      });
  });
