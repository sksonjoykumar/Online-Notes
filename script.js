// Selected all html id
const createBtn = document.getElementById("create-note-btn");
const notesContainer = document.querySelector(".notes-container");
const noteContent = document.getElementById("note-content");
const deleteBtn = document.getElementById("deleteBtn");
// console.log(deleteBtn)

// window.onload function
window.onload = function () {
  mainFun();
};

// mainFun function
function mainFun() {
  // createBtn addEventListener
  createBtn.addEventListener("click", createBtnFun);

  //   notesContainer addEventListener
  notesContainer.addEventListener("click", function (e) {
    notesContainerFun(e);
  });
}

// createBtn function
function createBtnFun() {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "note-content";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "./images/delete.png";
  img.className = "delete";
  notesContainer.appendChild(inputBox).appendChild(img);
}

// notesContainerFun
function notesContainerFun(e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".note-content");
    notes.forEach(function (nt) {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
}

//   set localStorage function
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

// //   getFun
function getNoteFun() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
getNoteFun();
// document addEventListener
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
