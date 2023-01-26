const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

mongoose.connect("mongodb://0.0.0.0/Olympic",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection is sucessful...");
}).catch((e)=>{
    console.log("connection is found" +e);
});