var Express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');
var app = Express();
app.use(bodyParser.json());

var Storage = multer.diskStorage({
   destination: function(req, file, callback) {
       callback(null, "./Images");
   },
   filename: function(req, file, callback) {
       callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
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
        return res.end("File uploaded sucessfully!.");
    });
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
