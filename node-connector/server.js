var Express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');
var app = Express();
const { exec } = require('child_process');
var sleep = require('sleep');
app.use(bodyParser.json());

var Storage = multer.diskStorage({
   destination: function(req, file, callback) {
       callback(null, "./Images");
   },
   filename: function(req, file, callback) {
       callback(null, "genuine-test");
   }
});
var upload = multer({
     storage: Storage
 }).array("imgUploader", 3);

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
        sleep.sleep(10);
        return res.end("File uploaded sucessfully!.");
    });
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
