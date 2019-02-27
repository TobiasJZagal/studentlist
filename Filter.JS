window.addEventListener("DOMContentLoaded", init);

const Students = {
  firstName: "-student-first-name-",
  lastName: "-student-last-name-",
  house: "-student-house-"
};

let allStudents = [];

function init() {
  loadJSON();
  console.log("init");
}

function loadJSON() {
  console.log("loadJSON");
  fetch("http://petlatkea.dk/2019/hogwarts/students.json")
    .then(response => response.json())
    .then(myJson => prepareObjects(myJson));
  console.log("myJson");
}

function prepareObjects(jsonData) {
  jsonData.forEach(jsonObject => {
    const students = Object.create(Students);

    const parts = jsonObject.fullname.split(" ");
    students.firstName = parts[0];
    students.lastName = parts[1];
    students.house = jsonObject.house;

    allStudents.push(students);
  });
  displayAnimal();
}

function filterList() {}

function sortList(a, b) {
  if (a.firstName < b.firstName) {
    return -1;
  } else {
    return 1;
  }
}

function displayList() {}

function displayAnimal() {
  console.log(Students);
}
