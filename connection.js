const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-assignment', { useNewUrlParser: true, useUnifiedTopology: true })
.then( () => console.log('Successfully connected to database'))
.catch((err) => console.log(err.message));

// let userSchema = new mongoose.Schema({
//     tags:[String],
//     date: {type:Date, default:Date.now},
//     name: {type:String},
//     author: {type:String},
//     isPublished: {type:Boolean}
// });

let userSchema = new mongoose.Schema({}, { strict: false }); //wihtout defining schema

let userModel = mongoose.model('courses', userSchema);
console.log(userModel.UserData);
async function allUsers(){
    let result = await userModel.find();
    console.log(result); 
}

allUsers();