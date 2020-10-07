const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/1004',{ useNewUrlParser: true, useUnifiedTopology: true })

const Schema=mongoose.Schema;

const frutiSchema=new Schema({
    name:String, 
    imgUrl:Array,
    titile:String,
    price:String,
    detial:String,
    kind:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Kind'
    },

});


const Shop = mongoose.model('Shop', frutiSchema, 'shop');


module.exports=Shop;
