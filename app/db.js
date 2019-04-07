const {MongoClient} = require('mongodb');

const url = "mongodb://db:27017/dialogflow";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    console.log("Connected!");
    db.close();
});

const createReminder = (date, time, content) => {

}

const updateReminder = (id, content) => {

}

const deleteReminder = (id) => {

}

module.exports = {
    createReminder,
    updateReminder,
    deleteReminder,
}