const openForm = document.querySelector('.button-contacts');
const modal = document.querySelector(".modal");
const modalClose = modal.querySelector(".modal-close");
const modalForm = modal.querySelector(".reply-form");
const modalName = modal.querySelector(".reply-name");
const modalEmail = modal.querySelector(".reply-email");
const modalMessage = modal.querySelector("textarea[name=message]");
let storageName = "";
let storageEmail = "";
let isStorageSupport = true;
let validName = false;
let validEmail = false;


try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

openForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  if (storageName) {
    modalName.value = storageName;
    modalEmail.focus();
    validName = true;
  } else {
    modalName.focus();
  }
  if (storageEmail) {
    modalEmail.value = storageEmail;
    validEmail = true;
  }
  if (validEmail && validName) {
    modalMessage.focus();
  }
});


modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  modalName.classList.remove("reply-error");
  modalEmail.classList.remove("reply-error");
});

modalForm.addEventListener("submit", function (evt) {
  // if (!modalName.value || !modalEmail.value) {
  // if (!modalName.value) {
  //   modalName.classList.add("reply-error");
  //   modalName.focus();
  // }
  if (!modalEmail.value && !modalName.value) {
    modalName.classList.add("reply-error")
    modalEmail.classList.add("reply-error");
    modalName.focus();
    evt.preventDefault();
  } else if (!modalName.value) {
    modalName.classList.add("reply-error");
    modalEmail.classList.remove("reply-error");
    modalName.focus();
    evt.preventDefault();
  } else if (!modalEmail.value) {
    modalEmail.classList.add("reply-error");
    modalName.classList.remove("reply-error");
    modalEmail.focus();
    evt.preventDefault();
  } else if (isStorageSupport) {
    localStorage.setItem("name", modalName.value);
    localStorage.setItem("email", modalEmail.value);

  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.code === "Escape") {
    if (modal.classList.contains("modal-show")) {
      evt.preventDefault();
      modal.classList.remove("modal-show");
      modalName.classList.remove("reply-error");
      modalEmail.classList.remove("reply-error");
    }
  }
});
