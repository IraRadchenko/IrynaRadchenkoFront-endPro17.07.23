function showUserMessage(userMes) {
    const userMessage = new HTMLElement('div', {id: 'userMessage'});
    userMessage.setText(`You: ${userMes}`);
    userMessage.appendTo(chatContent);
}

function showBotMessage(botMes) {
    const botMessage = new HTMLElement('div', {id: 'botMessage'});
    botMessage.setText(`Bot: ${botMes}`);
    botMessage.appendTo(chatContent);
}

function showImg(img) {
    const imgMessage = new HTMLElement('img', {src: img});
    imgMessage.appendTo(chatContent);
}