var mongo = require('mongodb');

var uri = 'mongodb://127.0.0.1:27017/example'

mongo.MongoClient.connect(uri, function (error, db) {
    if (error)
    {
        console.log(error)
        process.exit(1)
    }
    
    db.collection('hello').insert({hello: "Hello", world: "World"}, function (error, result) {
        if(error) {
            console.log(error)
            process.exit(1)
        }        
        console.log(result)
    })
    
})