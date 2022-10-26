"user strict";
// dom - login
const wrap = document.querySelector("#wrap");
const loginContainer = document.querySelector(".login-container");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector(".login-input");
const loginPassword = document.querySelector(".login-password");
const loginBtn = document.querySelector(".login-btn");

// dom - todo
const todoContainer = document.querySelector(".todo-container");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const list = document.querySelector(".list");

// login - storage
let idArr = [];
// let idarrSet =  new Set(idArr.map(JSON.stringify));
wrap.classList.remove('active');

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputVal = loginInput.value;
  const passVal = loginPassword.value;
  //   localstorage
  const localId = localStorage.setItem("ID", inputVal);
  const localPass = localStorage.setItem("Password", passVal);

  if (inputVal) {
    idArr.push(inputVal);
    if (inputVal === idArr[0] || idArr[1] || idArr[2]) {
      alert(`만나서 반갑습니다. ${inputVal}님!`);
      loginContainer.classList.add("active");
      todoContainer.style.display = "flex";
      wrap.classList.add("active");
    } else if (inputVal !== idArr[0] || idArr[1] || idArr[3]) {
      alert(`ID , Password를 다시 찾아 주세요`);
    }
  }
  localStorage.getItem("ID");
  localStorage.getItem("Password");
});

// todo
let count = 0;
let toDos = [];

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // todo inpuvalue
  const todoVal = todoInput.value;
  const p = document.createElement("p");
  list.appendChild(p);
  const delBtn = document.createElement("button");
  p.classList.add("list-item");
  p.innerText = `할일(${count++}) : ${todoInput.value}`;
  p.appendChild(delBtn);
  delBtn.classList.add("delBtn");
  delBtn.innerText = "X";
  todoInput.value = "";
  toDos.push(todoVal);
  delBtn.addEventListener("click", () => {
    p.remove();
  });

  const toDosArr = JSON.stringify(toDos);
  localStorage.setItem("TODO", toDosArr);

  const getArr = localStorage.getItem("TODO");
  const todoArr = JSON.parse(getArr);
});
