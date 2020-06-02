const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const ProductsSchema=new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3,
    },
    rating:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
    },
    price:{
        type:Number,
        required:true,
    }
},
{
    timestamps:true,
}
);

const Products=mongoose.model('products',ProductsSchema);
module.exports=Products;

// id: string,
// name: string,
// rating: number,
// category: string,
// price: number