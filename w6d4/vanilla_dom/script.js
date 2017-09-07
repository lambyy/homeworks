document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  const appendSFPlace = () => {
    const input = document.querySelector(".favorite-input");

    const li = document.createElement("li");
    li.textContent = input.value;
    input.value = "";

    const ul = document.getElementById("sf-places");
    ul.appendChild(li);
  };

  const form = document.querySelector(".list-container form");
  form.addEventListener("submit", event => {
    event.preventDefault();
    appendSFPlace();
  });



  // adding new photos

  const newPhotoButton = document.querySelector('.photo-show-button');

  newPhotoButton.addEventListener("click", (el) => {
    const photoForm = document.querySelector('.photo-form-container');
    if (photoForm.className === "photo-form-container hidden") {
      photoForm.className = "photo-form-container";
    } else {
      photoForm.className = "photo-form-container hidden";
    }
  });

  const addNewPhoto = (url) => {
    const ul = document.querySelector(".dog-photos");
    const li = document.createElement("li");
    const img = document.createElement("img");

    img.src = url;
    li.appendChild(img);
    ul.appendChild(li);
  };

  const submitNewPhoto = document.querySelector(".photo-url-submit");

  submitNewPhoto.addEventListener("click", (event) => {
    event.preventDefault();
    const photoUrlInput = document.querySelector(".photo-url-input");
    addNewPhoto(photoUrlInput.value);
    photoUrlInput.value = "";
  });



});
