const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/1004',{ useNewUrlParser: true, useUnifiedTopology: true })

const Schema=mongoose.Schema;

const frutiSchema=new Schema({
    name:String, 
    imgUrl:String,
    titile:String,
    price:String,
    detial:String,
    kind:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Kind'
    },

});


const Fruit = mongoose.model('Fruit', frutiSchema, 'fruit');


module.exports=Fruit;
