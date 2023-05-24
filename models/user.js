/*** USER SCHEMA ***/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userDraft = new Schema({
	username: String,
	password: String,
	email: String,
});
const userDraft = mongoose.model('users', newUserSchema);

const userSchema = new Schema({
	user: String,
	password: String,
	email: String,
	id: String
});
const userSchema = mongoose.model('users', userSchema)

module.exports = userDraft;
module.exports = userSchema;

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const blogSchema = new Schema({
// 	title: String,
// 	body: String,
// });

// const Blog = mongoose.model('blogposts', blogSchema);

// module.exports = Blog;