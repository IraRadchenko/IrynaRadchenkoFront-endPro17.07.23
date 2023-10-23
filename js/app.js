'use strict';

//const chat = document.getElementById('root');

const chatContent = document.getElementById('chatContent');

const chatInput = document.getElementById('chatInput');

const input = new  HTMLElement('textarea', {name: 'input', id: 'input', placeholder: 'Write a message...'});
input.appendTo(chatInput);

const sendBtn = new HTMLElement('button', {type: 'button', id: 'btn'});
sendBtn.setText('SEND');
sendBtn.appendTo(chatInput);
sendBtn.onClick(showUserMessage);

const endDialogue = new HTMLElement('div', {id: 'endDialogue'});
endDialogue.setText('Bot: HI!!!');
endDialogue.appendTo(chatContent);
const imgMessage = new HTMLElement('img', {src: 'img/smile3.png'});
imgMessage.appendTo(chatContent);
function showUserMessage() {

    const userMessageText = document.getElementById('input').value;

    if(userMessageText === 'STOP') {

        const userMessage = new HTMLElement('div', {id: 'userMessage'});
        userMessage.setText(`You: ${userMessageText}`);
        userMessage.appendTo(chatContent);
        document.getElementById('btn').disabled = true;

        const endDialogue = new HTMLElement('div', {id: 'endDialogue'});
        endDialogue.setText('Bot: You are probably not ready for dialogue. Goodbye!!!');
        endDialogue.appendTo(chatContent);

        const imgMessage = new HTMLElement('img', {src: 'img/smile1.png'});
        imgMessage.appendTo(chatContent);

        document.getElementById('input').value = '';
    }else{
        const userMessage = new HTMLElement('div', {id: 'userMessage'});
        userMessage.setText(`You: ${userMessageText}`);
        userMessage.appendTo(chatContent);
        document.getElementById('input').value = '';

        const response = responses[Math.floor(Math.random() * responses.length)];
        const responseWaiting = Math.floor(Math.random() * 10 + 1) * 1000;

        function showBotMessage() {
            const botMessage = new HTMLElement('div', {id: 'botMessage'});
            botMessage.setText(`Bot: ${response}`);
            botMessage.appendTo(chatContent);
        }
        setTimeout(showBotMessage, responseWaiting);
    }
}

const responseEnd = Math.floor(Math.random() * 50 + 1) * 1000;
function showEndBotMessage() {
    const botMessage = new HTMLElement('div', {id: 'botMessage'});
    botMessage.setText(`Bot: Я втомився, вибач!`);
    botMessage.appendTo(chatContent);

    const imgMessage = new HTMLElement('img', {src: 'img/smile.png'});
    imgMessage.appendTo(chatContent);
    document.getElementById('btn').disabled = true;
}
setTimeout(showEndBotMessage, responseEnd);