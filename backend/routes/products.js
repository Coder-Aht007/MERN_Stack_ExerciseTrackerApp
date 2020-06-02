const router=require("express").Router();
let Product=require('../models/products.model');

router.route('/').get((req,res)=>{
    Product.find()
    .then(exercises=>{res.json(exercises)})
    .catch(err=>res.status(400).json("ERROR: "+err));
});



module.exports=router;