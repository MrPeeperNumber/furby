const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Post Draft Schema
const post = new Schema({
	user_id: mongoose.ObjectId,
	title: String,
	description: String,
	tags: [mongoose.ObjectId],
	contentURL: String,
	contentType: Number,								// assign content to a number
	category: Number,									// assign category to a number
	species: Number,									// assign species to number
	gender: Number,										// assign gender to number
	rating: Number,
	faves: Number,
	views: Number,
	createdAt: Date,
	updatedAt: Date,
});
const Post = mongoose.model('posts', post);

module.exports = Post;