const {MongoClient} = require('mongodb');

const url = "mongodb://db:27017/dialogflow";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    console.log("Connected!");
});

const createReminder = async (date, time, content) => {

	const entity = {
		date, time, content
	}

	try {
		const record = await dbo.collection("reminders").insertOne(entity)

		return record
	} catch (e) {
		console.error(e)

		throw e
	}
}

const updateReminder = async (id, content) => {
	try {
		await dbo.collection("reminders").updateOne({id}, {$set: content})
	} catch (e) {
		console.error(e)

		throw e
	}
}

const deleteReminder = async (id) => {
	try {
		await dbo.collection("reminders").deleteOne({id})
	} catch (e) {
		console.error(e)

		throw e
	}
}

module.exports = {
    createReminder,
    updateReminder,
    deleteReminder,
}