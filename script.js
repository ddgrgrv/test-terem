const btnCloseModal = document.getElementById('close-modal'),
      modal = document.getElementById('modal'),
      btnWarning = document.querySelector('.btn-warning'),
      btnSuccess = document.querySelector('.btn-success'),
      firstRow = document.querySelector('.first-row'),
      secondItem = document.getElementById('item-2');

function hideBlock(item){
    item.classList.toggle('remove');
}

function replaceBlock(item){
    item.classList.toggle('order');
}

document.addEventListener("DOMContentLoaded", ()=>{
    modal.style.display = 'flex';
});

btnCloseModal.addEventListener('click', ()=>{
    modal.style.display = 'none';
    document.querySelector('.modal-container').remove();
});

btnWarning.addEventListener('click', ()=>{
    hideBlock(firstRow);
});

btnSuccess.addEventListener('click', ()=>{
    replaceBlock(secondItem);
});