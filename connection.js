const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-assignment', { useNewUrlParser: true, useUnifiedTopology: true })
.then( () => console.log('Successfully connected to database'))
.catch((err) => console.log(err.message));

let userSchema = mongoose.Schema({
    tags: {type:Array},
    date: {type: String},
    name: {type:String},
    author: {type:String},
    isPublished: {type:Boolean},
    price:{type:Number}
});

let userModel = mongoose.model('mongoUserData', userSchema);

async function allUsers(){
    let result = await userModel.find();
    console.log(result); 
}

allUsers();