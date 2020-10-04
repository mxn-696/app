const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/1004',{ useNewUrlParser: true, useUnifiedTopology: true })

const Schema=mongoose.Schema;

const userSchema=new Schema({
    username:String,
    password:String,
    // car:{
    //     type:mongoose.SchemaTypes.ObjectId,
    //     ref:'Car'
    // }
});


const User = mongoose.model('User', userSchema, 'user');


module.exports=User;