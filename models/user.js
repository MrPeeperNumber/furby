/*** USER SCHEMA ***/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	user: String,
	password: String,
	email: String,
	id: String
});
const User = mongoose.model('users', userSchema)

module.exports = User;

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const blogSchema = new Schema({
// 	title: String,
// 	body: String,
// });

// const Blog = mongoose.model('blogposts', blogSchema);

// module.exports = Blog;