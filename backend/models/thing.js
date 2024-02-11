const mongoose=require('mongoose');

const thingSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        requierd:true
    }
});

module.exports=mongoose.model('thing',thingSchema);