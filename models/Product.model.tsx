

export const productModel = {
    name: {
        type: String,
        
    },
    category: {
        type: String, enum: ["necklace", "bracelet"]
    },
    description: {
        type: String,
        
    },
    price: {
        type: Number,
        
    },
    imgLink: {
        type: String,
        
    },
    isSold: {
        type: Boolean,
        default: false,
    },
    tags: {
        type: Array,
        
    } 

}
