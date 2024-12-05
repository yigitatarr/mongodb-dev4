require("dotenv").config()

var mongoose = require('mongoose');
var dbURI = 'mongodb+srv://tahaserifaydin:udOFNj3JoeUU3diu@cluster0.4oqby.mongodb.net/';


mongoose.connect(dbURI)
mongoose.connection.on("connected", function(){
    console.log("Mongoose connected to " + dbURI)
})

mongoose.connection.on("disconnected", function(err){
    console.log("kapandı")
})

process.on("SIGINT", function(){
    mongoose.connection.close()
    console.log("MongoDB bağlantısı kesildi, uygulama durduruldu.")
    process.exit(0)
})