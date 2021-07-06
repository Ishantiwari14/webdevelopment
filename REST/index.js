const express = require('express');
const app = express();
const path = require('path');
const methodooverride = require('method-override')


const { v4: uuid } = require('uuid');
uuid();

app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(methodooverride('_method'));
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

let comments = [
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

app.get('/comments/:id/edit', (req, res) => {
	const {id} = req.params;
	const comment = comments.find(c => c.id === id);
	res.render('comments/edit', {comment});
	res.redirect('/comments')

})

app.delete('/comments/:id', (req, res) => {
	const {id} = req.params;
	comments = comments.filter(c => c.id !== id)
	res.redirect('/comments')

})

app.patch('/comments/:id', (req, res) => {
	const {id} = req.params;
	const newCommentText = req.body.comment;
	const foundComment = comments.find(c => c.id === id);
	foundComment.comment += newCommentText;
	res.redirect('/comments')

	// res.send("all good!!")
	// const comment = comments.find(c => c.id === id);
	
	// res.send('Updating someting')
})

// app.get('/tacos', (req, res) => {
// 	console.log(req.query);
// 	res.send("GET /tacos resp  onse.")
// })

// app.post('/tacos', (req, res) => {
// 	const {meat, qty} = req.body;
// 	res.send(`And that's how you get your ${qty} ${meat} tacos.`)
// })



app.listen(3000, () => {
	console.log("On port 3000!!")
})