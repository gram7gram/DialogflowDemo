'use strict';

const {dialogflow} = require('actions-on-google');

const app = dialogflow();

const INTENTS = {
    Reminders: {
        CreateReminder: 'Reminders/CreateReminder',
        DeleteReminder: 'Reminders/DeleteReminder',
    }
}

app.intent(INTENTS.Reminders.CreateReminder, conv => {
    conv.ask('Create reminder')
})

app.intent(INTENTS.Reminders.DeleteReminder, conv => {
    conv.ask('Delete reminder')
})

app.fallback(conv => {
    conv.ask('Not understood')
})

module.exports = app