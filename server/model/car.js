const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/1004',{ useNewUrlParser: true, useUnifiedTopology: true })

const Schema=mongoose.Schema;

const carSchema=new Schema({
    username:String,
    list:Array
});


const Car = mongoose.model('Car', carSchema, 'car');

module.exports=Car;
