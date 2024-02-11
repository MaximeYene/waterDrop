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
        required:true
    },
    imageFile:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('thing',thingSchema);