const btnCloseModal = document.getElementById('close-modal'),
      modal = document.getElementById('modal'),
      btnWarning = document.querySelector('.btn-warning'),
      btnSuccess = document.querySelector('.btn-success'),
      firstRow = document.querySelector('.first-row'),
      secondItem = document.getElementById('item-2');

function createModal(){
    modal.style.display = 'flex';
}

function closeModal(){
    modal.style.display = 'none';
    document.querySelector('.modal-container').remove();
}

function hideBlock(item){
    item.classList.toggle('remove');
}

function replaceBlock(item){
    item.classList.toggle('order');
}

document.addEventListener("DOMContentLoaded", createModal);

btnCloseModal.addEventListener('click', closeModal);

btnWarning.addEventListener('click', ()=>{
    hideBlock(firstRow);
});

btnSuccess.addEventListener('click', ()=>{
    replaceBlock(secondItem);
});

