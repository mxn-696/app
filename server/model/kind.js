//种类


const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/1004',{ useNewUrlParser: true, useUnifiedTopology: true })

const Schema=mongoose.Schema;

const kindSchema=new Schema({
    kind:String
});


const Kind = mongoose.model('Kind', kindSchema, 'kind');

// var kind=new Kind({
//     kind:'礼品'
// })
// kind.save()
module.exports=Kind;
