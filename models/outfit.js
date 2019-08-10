const moongose = require('mongoose');

//Schema
const OutfitSchema = new moongose.Schema({
    name:{
        type: String,
        required: true
    },
    top: {
        type: String,
        enum: ['T-Shirt', 'Hoodie', 'Jacket', 'Shirt'], 
        required: true
    },
    bottom: {
       type: String,
       enum: ['Jean', 'Pants', 'Jogger', 'Shorts'],
       required: true 
    },
    shoes: {
        type: String,
        enum: ['Sneakers', 'Shoes', 'Sandals']
    }
});

module.exports = moongose.model('Outfit', OutfitSchema);