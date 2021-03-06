var Express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');
var app = Express();
const { exec } = require('child_process');
var sleep = require('sleep');
var fs = require('fs');
var express = require('express');
app.use(bodyParser.json());
app.use('/res', express.static(__dirname + '/res'));

var Storage = multer.diskStorage({
   destination: function(req, file, callback) {
       callback(null, "./Images");
   },
   filename: function(req, file, callback) {
       callback(null, "genuine-test.jpg");
   }
});
var Storagetrain = multer.diskStorage({
   destination: function(req, file, callback) {
       callback(null, "./Images");
   },
   filename: function(req, file, callback) {
       callback(null, file.originalname);
   }
});
var upload = multer({
     storage: Storage
 }).array("imgUploader", 3);

var uploadtrain = multer({
      storage: Storagetrain
  }).array("imgUploader", 50);

app.post("/api/Upload", function(req, res) {
    upload(req, res, function(err) {
        if (err) {
            console.log(err);
            return res.end("Something went wrong!");
        }
        var yourscript = exec('bash commands.sh',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
        sleep.sleep(17);
        var e = 0;
        fs.readFile('a.txt', 'utf8', function(err, data){
          // Display the file content
          console.log(data[31]);
          e = data[31];
          if(e == 1){
            fs.readFile('valid.html', 'utf8', function(e, d){
              return res.end(d);
            });
          }
          else{
            fs.readFile('invalid.html', 'utf8', function(e, d){
              return res.end(d);
            });
            //return res.sendFile('invalid.html');
          }
          //console.log(data);
          if(err){
            console.log(err);
          }
        });
    });
});

app.post("/api/train", function(req, res) {
    uploadtrain(req, res, function(err) {
        if (err) {
            console.log(err);
            return res.end("Something went wrong!");
        }
        var yourscript = exec('bash train.sh',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
        sleep.sleep(5);
        fs.readFile('modeltrain.html', 'utf8', function(e, d){
          return res.end(d);
        });
    });
});
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
