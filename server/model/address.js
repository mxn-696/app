const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/1004',{ useNewUrlParser: true, useUnifiedTopology: true })

const Schema=mongoose.Schema;

const adsSchema=new Schema({
    username:String,
    list:Array
});


const Ads = mongoose.model('Ads', adsSchema, 'ads');

module.exports=Ads;