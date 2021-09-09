const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    category: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20,
    },
    content: {
        type:String,
        required: true,
        minlength : 5,
        maxlength: 255,
    },

    date: { type: Date, default: Date.now ,required:true}
});

module.exports = mongoose.model('PostCard',postSchema);