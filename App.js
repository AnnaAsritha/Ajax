//Text file data
let textButton = document.querySelector("#text-btn");
textButton.addEventListener("click", function () {
  //Ajax
  //create an ajax request
  let xhr = new XMLHttpRequest();

  //prepare the request
  xhr.open("Get", "simple.txt", true);

  //send the request
  xhr.send();

  //process the request
  xhr.onload = () => {
    if (xhr.status === 200) {
      let data = xhr.responseText;
      displayTextData(data);
    }
  };
});
//Display text data
let displayTextData = (data) => {
  let htmlTemplate = `<h3>${data}</h3>`;
  document.querySelector("#Text-card").innerHTML = htmlTemplate;
};
//Json button

let jsonButton = document.querySelector("#Json-btn");
jsonButton = addEventListener("click", function () {
  let xhr = new XMLHttpRequest();
  xhr.open("Get", "Mobiles.json", true);
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      let data = xhr.responseText;
      //To get the output in json format
      let mobile = JSON.parse(data);
      //   console.log(mobile);
      displayJsonData(mobile);
    }
  };
});

//.Display in json data
let displayJsonData = (mobile) => {
  let htmlTemplate = "";
  htmlTemplate =
    //   here class names are given for proper bootstrap format
    `<ul class = "list- group mt-1">
    <li class = "list-group-item">ID :${mobile.id} </li>
    <li class ="list-group-item"> Brand : ${mobile.brand}</li>
    <li class ="list-group-item"> Color : ${mobile.color}</li>
    <li class ="list-group-item"> Price : ${mobile.price}</li>
    </ul>`;

  document.querySelector("#Json-card").innerHTML = htmlTemplate;
};
//Api Button
let apiButton = document.querySelector("#API-btn");

apiButton.addEventListener("click", function () {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      let data = xhr.responseText;

      let users = JSON.parse(data);

      displayUsers(users);
    }
  };
});

// display users
let displayUsers = (users) => {
  let htmlTemplate = "";
  for (let user of users) {
    htmlTemplate += `<ul class="list-group mt-1">
         <li class="list-group-item">ID : ${user.id}</li>
        <li class="list-group-item">NAME: ${user.name}</li>
        <li class="list-group-item">Email : ${user.email}</li>
        <li class="list-group-item">STREET : ${user.address.street}</li>
       <li class="list-group-item">CITY : ${user.address.city}</li>
     </ul>`;
  }
  document.querySelector("#APi-card").innerHTML = htmlTemplate;
};
