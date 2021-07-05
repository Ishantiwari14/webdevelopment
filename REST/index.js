const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
uuid();

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

const comments = [
	{
		id: uuid(),
		username: 'Todd',
		comment: 'haha thats funny bro'
	},
	{
		id: uuid(),
		username: 'Skyler',
		comment: 'I like to go dogwatching with my bird'
	},
	{
		id:uuid(),
		username: 'sk8erBoi',
		comment: "Yo, delete that account todd"
	},
	{
		id: uuid(),
		username: 'onlysaysshit',
		comment: 'shitshitshit'
	}
]

app.get('/comments', (req, res) => {
	
	res.render('comments/index', {comments})
})

app.get('/comments/new', (req, res) => {
	res.render('comments/new')
})

app.post('/comments', (req, res) => {
	const {username, comment} = req.body;
	comments.push({username, comment, id: uuid()});
	res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
	const {id} = req.params;
	// const comment = comments.find(c => c.id === id);
	// res.render('comments/show', {id, comment})
	res.render('comments/show', {id, comments})
})

// app.get('/tacos', (req, res) => {
// 	console.log(req.query);
// 	res.send("GET /tacos response.")
// })

// app.post('/tacos', (req, res) => {
// 	const {meat, qty} = req.body;
// 	res.send(`And that's how you get your ${qty} ${meat} tacos.`)
// })



app.listen(3000, () => {
	console.log("On port 3000!!")
})