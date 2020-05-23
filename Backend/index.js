const express = require('express');
const path = require('path');
const multer = require('multer');
var bodyParser = require('body-parser')
var fs = require('fs')
var app = express();
const {spawn} = require('child_process')


var port = 3000;
app.listen(port,()=>console.log(`Example app listening at ${port}`));


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

// multer implementation for image file storage
var storage = multer.diskStorage({
	destination: function(req, file, cb){
		cb(null, 'data/test/021/')
	},
	filename: function(req, file, cb){
		cb(null, file.fieldname+'-'+Date.now()+'.jpg')
	}
})

var upload = multer({storage: storage})

app.post('/uploadfile', upload.single('myFile'), (req,res,next)=>{
	const file = req.file
	if(!file){
		const error = new Error('Please upload a file')
		error.httpStatusCode = 400
		return next(error)
	}
	runPython(req,res);
	// res.send(file)
})

function runPython(req,res){

	console.log('running python file')
	var process = spawn('python',["./sigrecog.py"]);

	process.stdout.on('data',function(data){
		res.send(data.toString());
	})
}

// testing running of python file from nodejs
app.post('/name', function(req,res){
	
});






