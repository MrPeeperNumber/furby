const mongoose = require('mongoose');
const Schema = mongoose.Schema;

j// Post Draft Schema
const postDraft = new Schema({
	username: String,
	user_id: Number,
	content: ,
});
const postDraft = mongoose.model('users', newUserSchema);

// Post Schema
const post = new Schema({
	username: String,
	user_id: Number,
	content: ,
});
const post = mongoose.model('users', newUserSchema);

module.exports = postDraft;
module.exports = post;