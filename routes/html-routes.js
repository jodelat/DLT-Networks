var path = require("path");

module.exports = function(app){

  app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/contact", function(req, res){
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });

  // app.get("/app", function(req, res){
  //   res.sendFile(path.join(__dirname, "../public/app.html"));
  // });

}
