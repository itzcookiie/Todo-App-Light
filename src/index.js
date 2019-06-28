import "../styles/styles.css";

const formEl = document.querySelector("#todo-form");

formEl.addEventListener("submit", e => {
  e.preventDefault();
  const list = document.querySelector(".todo-list");
  const secondList = document.querySelector(".second-todo-list ul");
  const listElement = document.querySelector(".todo-list ul");
  const todoText = e.target.querySelector("textarea");
  let newListElement = document.createElement("li");
  newListElement.innerHTML = `
    ${todoText.value} 
    <button>X</button>
  `;
  let fragment = document.createDocumentFragment();
  fragment.appendChild(newListElement);
  if (listElement.clientHeight > list.clientHeight - 100) {
    secondList.appendChild(fragment);
  } else {
    listElement.appendChild(fragment);
  }
  todoText.value = "";

  let textButton = newListElement.querySelector("button");
  textButton.addEventListener("click", deleteText);

  function deleteText(e) {
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  }
});
