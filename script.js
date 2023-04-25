const btnCloseModal = document.getElementById('close-modal'),
      modalContainer = document.querySelector('.modal-container'),
      btnWarning = document.querySelector('.btn-warning'),
      btnSuccess = document.querySelector('.btn-success'),
      firstRow = document.querySelector('.first-row'),
      secondItem = document.getElementById('item-2');

function createModal(){
    modalContainer.classList.toggle('visible');
}

function hideBlock(){
    firstRow.classList.toggle('remove');
}

function replaceBlock(){
    secondItem.classList.toggle('order');
}

document.addEventListener("DOMContentLoaded", createModal);

btnCloseModal.addEventListener('click', createModal);

btnWarning.addEventListener('click', hideBlock);

btnSuccess.addEventListener('click', replaceBlock);

