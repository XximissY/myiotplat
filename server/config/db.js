const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')
var MongoClient = require('mongodb').MongoClient;

const connectDB = async ()=>{
    try{  
        await mongoose.connect(db,{ 
            useNewUrlParser: true,
            useUnifiedTopology: true}) 
            //mongoFind("Kirati");
            console.log('Mongodb connect...')
        }catch(err){ 
            console.error(err.message)
            process.exit(1)
        }
}

function mongoFind(get_quary_data){
    MongoClient.connect(db, function(err, db) {
        if (err) throw err;
        var dbo = db.db("dxIoT");
        var query = { _key : {
            $regex : "^.*"+ get_quary_data +".*"
        } };
        dbo.collection("users").find(query).toArray(function(err, result) {
          if (err) throw err;
          console.log("Has "+ result.length +" data in collection");
          for(var i = 0;i<result.length;i++){
                console.log("Data "+(i+1)+" was ");
                console.log(result[i]); 
          }
          db.close();
        });
      });
}

module.exports = connectDB