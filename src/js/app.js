document.addEventListener('DOMContentLoaded', () => {
const chatContent = document.getElementById('chatContent');

const chatInput = document.getElementById('chatInput');

const input = new  HTMLElement('textarea', {name: 'input', id: 'input', placeholder: 'Write a message...'});
input.appendTo(chatInput);

const sendBtn = new HTMLElement('button', {type: 'button', id: 'btn'});
sendBtn.setText('SEND');
sendBtn.appendTo(chatInput);
sendBtn.onClick(displayUserMessage);

const response = responses[Math.floor(Math.random() * responses.length)];
const responseWaiting = Math.floor(Math.random() * 10 + 1) * 1000;

const responseEnd = Math.floor(Math.random() * 70 + 1) * 1000;

const endDialogueBotMessage = 'Ймовірно, ви не готові до діалогу. До побачення!!!';

const botMessage = 'Я втомився, вибачте!';

const hiMessage = 'Привіт!';

showBotMessage(hiMessage);
showImg('img/smile3.png');

function displayUserMessage() {
    const userMessageText = document.getElementById('input').value;

    showUserMessage(userMessageText);

    document.getElementById('input').value = '';

    if(userMessageText === 'STOP') {

        showBotMessage(endDialogueBotMessage);
        showImg('img/smile1.png');

        document.getElementById('btn').disabled = true;

    }else{
        setTimeout(() => showBotMessage(response), responseWaiting);
    }
}

function showEndBotMessage() {
    showBotMessage(botMessage);

    showImg('img/smile.png');

    document.getElementById('btn').disabled = true;
}

setTimeout(showEndBotMessage, responseEnd);
})