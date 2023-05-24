// Initialize ENV
// npm install dotenv
// npm install koa-methodoverride
// npm install koa-bodyparser
require('dotenv').config();
const override = require('koa-methodoverride');
const parser = require('koa-bodyparser');

// Connect to database
// require mongoose
const mongoose = require('mongoose');
const db = mongoose.connection;
const host = process.env.CLUSTER;
const dbupdate = {
	useNewUrlParser: true,
	useUnifiedTopology:true,
};
mongoose.connect(host, dbupdate);

db.on('error', (err) => console.log('Error, DB not connected'));
db.on('connected', () => console.log('Connected to Mongo'));
db.on('disconnected', () => console.log('Mongo is Disconnected'));
db.on('open', () => console.log('Connection made!'));

//Model Schema
const Blog = require('./models/blog.js');

// Create Koa server
const koa = require ('koa');
const server = new koa();

// Create static folder (for front end stuff)
// require koa-static
const static = require('koa-static');

// Create router
// require koa-router
const Router = require('koa-router');
const route = new Router();

// Creating views
// require koa-views
// require nunjucks
const views = require('koa-views');
const nunj = require('nunjucks');
nunj.configure('./views', {autoescape: true});

// Routes
// route.get() 		used when requesting information or files from a server 
// route.post() 	used when sending information or files to a server
// route.patch() 	used when changing a part of data
// route.put() 		used when replacing entire data piece
// route.delete() 	used when removing data 
// All included is CRUD - Create, Read, Update, and Delete
// ctx				context parameter, combination of request and response			

/*** HOME PAGE ***/
// unsure what to include in the home page
route.get('/', async (ctx) => {
	console.log('connected to root route');

	const results = await Blog.find({});
	console.log(results);
	await ctx.render('index.njk', {
		posts: results
	});

});

/*** LOGIN PAGE ***/ 
route.get('/login', async (ctx) => {
	console.log('connected to root route');

	const results = await Blog.find({});
	console.log(results);
	await ctx.render('loginPage.njk', {
		posts: results
	});

});

/*** POSTS ***/
// get all posts
route.get('/posts', async (ctx) => {
	console.log('connected to root route');

	const results = await Blog.find({});
	console.log(results);
	await ctx.render('posts.njk', {
		posts: results
	});

});

// get post by ID
route.get('/posts/:id', async (ctx) => {
	console.log('connected to root route');

	const results = await Blog.find({});
	console.log(results);
	await ctx.render('userprofile.njk', {
		posts: results
	});

});

/*** SEARCH ***/
route.get('/search', async (ctx) => {
	console.log('connected to root route');

	const results = await Blog.find({});
	console.log(results);
	await ctx.render('userprofile.njk', {
		posts: results
	});

});

route.get('/search?', async (ctx) => {
	console.log('connected to root route');

	const results = await Blog.find({});
	console.log(results);
	await ctx.render('userprofile.njk', {
		posts: results
	});

});

/*** USER ROUTES ***/
// get user by ID
route.get('/user/:id', async (ctx) => {
	console.log('connected to root route');

	const results = await Blog.find({});
	console.log(results);
	await ctx.render('userProfile.njk', {
		posts: results
	});

});

// edit user profile
route.get('/user/:id/edit', async (ctx) => {
	console.log('connected to root route');

	const results = await Blog.find({});
	console.log(results);
	await ctx.render('editProfile.njk', {
		posts: results
	});

});

/*** UPLOAD POST ***/
route.get('/create', async (ctx) => {
	console.log('connected to root route');

	const results = await Blog.find({});
	console.log(results);
	await ctx.render('createPost.njk', {
		posts: results
	});

});

// // show route
// route.get('/view/:id', async (ctx) => {

// 	console.log('connected to show route');
// 	const results = await Blog.findById(ctx.params.id);
// 	console.log(results);
// 	await ctx.render('show.njk', {
// 		post: results
// 	});

// });

// // admin route
// route.get('/admin', async (ctx) => {

// 	console.log('connected to admin route');
// 	const results = await Blog.find({});
// 	console.log(results);
// 	await ctx.render('admin.njk', {
// 		posts: results
// 	});

// });

// // delete route
// route.delete('/delete/:id', async (ctx) => {

// 	console.log('connected to delete route');
// 	console.log(ctx.request.body);
// 	if(ctx.request.body.pw === process.env.pw) {
// 		await Blog.findByIdAndRemove(ctx.params.id);
// 	}
// 	else console.log('wrong password');
// 	await ctx.render('complete.njk');

// });

// // create route
// route.get('/create', async (ctx) => {
// 	console.log('connected to create route');
// 	await ctx.render('create.njk');
// });

// route.post('/create', async (ctx) => {

// 	console.log('creating a post');
// 	console.log(ctx.request.body);
// 	if(ctx.request.body.pw === process.env.pw) {
// 		const results = await Blog.create(ctx.request.body);
// 		console.log(result);
// 	}
// 	else console.log('wrong password');

// 	await ctx.render('complete.njk');

// });

// // edit route
// route.get('/edit/:id', async (ctx) => {

// 	console.log('connected to the edit route');
// 	const results = await Blog.findById(ctx.params.id);
// 	console.log(results);
// 	await ctx.render('edit.njk', {
// 		post: results
// 	});

// });

// route.put('/edit/:id', async (ctx) => {

// 	console.log('editing a post');
// 	console.log(ctx.request.body);
// 	if(ctx.request.body.pw === process.env.pw) {
// 		const results = await Blog.findByIdAndUpdate(ctx.params.id, ctx.request.body, {new:true});
// 		console.log(results);
// 	}
// 	else console.log('wrong password');
// 	await ctx.render('complete.njk');

// });

// route.get('/:name', async (ctx) => {
// 	await ctx.render('./index.njk', {
// 		name:ctx.params.name
// 	});
// });

// Middleware
// Everything that happens between the request and the response\
server.use(override('_method'));
server.use(parser());
server.use(views('./views', {map: {njk: 'nunjucks'}}));
server.use(route.routes());
server.use(static('./public'));

// Port to listen on
server.listen(4001, 'localhost', () => console.log('Listening on port 4001'));