const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/populate', {useNewUrlParser:true, useUnifiedTopology:true})
.then(() => console.log('Connected to DB'))
.catch((err) => console.log('Something went wrong', err.message));


let userSchema = mongoose.Schema({
    name: {type:String},
    isAvailable: {type: Boolean},
    email: {type:String}
});

let courseSchema = mongoose.Schema({
    name: {type:String},
    authorId: {type: mongoose.Schema.Types.ObjectId, ref:'users'}
});

let userModel = mongoose.model('users', userSchema);
let courseModel = mongoose.model('courses', courseSchema);

async function newUser(){
    let data = new userModel({
        name: 'Vasant',
        isAvailable: true,
        email: 'vasant@gmail.com'
    });

    let result = await data.save();
    console.log(result);
}

async function newCourse(para){
    let data = new courseModel({
        name: 'NodeJS',
        authorId: para
    });

    let result = await data.save();
    console.log(result);
}

async function populate(){
    let data = await courseModel
                    .find()
                    .populate('authorId')
                    .select(['name', 'isAvailable', 'email']);
    
    console.log(data);
}

// newUser();
// newCourse('5d8e21fb53b6702008a0be98');

populate();