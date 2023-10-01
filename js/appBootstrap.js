'use strict';

const firstBlock = document.querySelector('#block-1');


 const modal = document.createElement('div');
 modal.className = 'modal fade';
 modal.id = 'exampleModal';
 modal.textContent = '';

 const modalDialog = document.createElement('div');
 modalDialog.className = 'modal-dialog';
 modalDialog.textContent = '';

 const modalContent = document.createElement('div');
 modalContent.className = 'modal-content';
 modalContent.textContent = '';

 const modalBody = document.createElement('div');
 modalBody.className = 'modal-body';
 modalBody.textContent = 'Hi, this is a modal window';

 const modalFooter = document.createElement('div');
 modalFooter.className = 'modal-footer';
 modalFooter.textContent = '';

 const modalBtn = document.createElement('button');
 modalBtn.type = "button";
 modalBtn.textContent = 'Close';
 modalBtn.className = 'btn btn-secondary';
 modalBtn.setAttribute('data-bs-dismiss', 'modal');

 modalContent.appendChild(modalBody);
 modalFooter.appendChild(modalBtn);
 modalContent.appendChild(modalFooter);
 modalDialog.appendChild(modalContent);
 modal.appendChild(modalDialog);
 firstBlock.appendChild(modal);


const firstButton = document.createElement('button');
firstButton.type = "button";
firstButton.textContent = 'MY FIRST MODAL';
firstButton.className = 'btn btn-secondary';
firstButton.setAttribute('data-bs-toggle', 'modal');
firstButton.setAttribute('data-bs-target', '#exampleModal');
firstButton.setAttribute('data-bs-toggle-secondary', 'tooltip');
firstButton.setAttribute('data-bs-placement', "left");
firstButton.setAttribute('data-bs-custom-class', 'custom-tooltip');
firstButton.setAttribute('data-bs-title', 'Tooltip');
firstBlock.appendChild(firstButton);

 var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle-secondary="tooltip"]'));
 var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
 });


const container = document.createElement('div');
container.textContent = '';
container.id = 'container';
firstBlock.appendChild(container);

const secondButton = document.createElement('button');
secondButton.type = 'button';
secondButton.textContent = 'button with alert';
secondButton.className = 'btn btn-primary';
container.appendChild(secondButton);

let alert = null;
secondButton.addEventListener('click', () => {
 if(!alert) {
  alert = document.createElement('div');
  alert.className = 'alert alert-primary';
  alert.role= "alert";
  alert.textContent = 'MY FIRST ALERT!';
  container.appendChild(alert);
 } else {
  alert.remove();
  alert = null;
 }
})
