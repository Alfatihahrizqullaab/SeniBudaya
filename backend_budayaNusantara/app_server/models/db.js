const mongoose = require("mongoose");
let dbURL = "mongodb://localhost:27017/db_budayaNusantara";

mongoose.connect(dbURL,{
    
});

mongoose.connection.on("connected", () => {
    console.log("Connected To MongoDB");
});

mongoose.connection.on("error", (error) => {
    console.log("Connection ERROR: "+ error);
});

mongoose.connection.on("disconected", () => {
    console.log("Disconnected From MongoDB");
});