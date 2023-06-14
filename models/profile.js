/*** PROFILE SCHEMA ***/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
	description: String,
	contactInfo: { type: Map, of: String },
	watchers: [mongoose.Schema.Types.ObjectId],
	watched: [mongoose.Schema.Types.ObjectId],
});
const Profile = mongoose.model('profiles', profileSchema)

module.exports = Profile;