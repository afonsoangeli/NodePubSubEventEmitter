const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};
const firstEmitter = new MyEmitter();
const userClickEvent = 'user:click';
const userName = 'John';
const okButton = 'Ok button';
const inputName = 'Input name';
const sendButton = 'Send button';
const finishButton = 'Finish button';

firstEmitter.on(userClickEvent, function(click, userName) {
    SaveLogAsync(click, userName)
});

firstEmitter.on(userClickEvent, function(click, userName) {
    if(click === finishButton)
    {
        SendEmailAsync(userName);
    }
});

async function SaveLogAsync(eventName, userName) {
    await sleep(300);
    console.log(`Click on ${eventName} saved for ${userName} on logs`);
}

async function SendEmailAsync(userName) {
    await sleep(1400);
    console.log(`Sending welcome email to ${userName}...`);
}

async function sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
}

async function main()
{
    firstEmitter.emit(userClickEvent, okButton, userName);
    await sleep(400);
    firstEmitter.emit(userClickEvent, inputName, userName);
    await sleep(400);
    firstEmitter.emit(userClickEvent, sendButton, userName);
    await sleep(400);
    firstEmitter.emit(userClickEvent, finishButton, userName);
}

main();