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
// console.log(userModel.UserData);
async function query1(){
    let result = await userModel
                        .find({tags:{$in:['backend']}, isPublished:true})
                        .sort('name') 
                        .select(['name', 'author']);
    console.log('Query one:');
    console.log(result); 
}

async function query2(){
    let result = await userModel
                        .find({isPublished: true})
                        .sort('price')
                        .select(['name', 'author']);
                        console.log('Query two:');
    console.log(result); 
}

query1();
query2();