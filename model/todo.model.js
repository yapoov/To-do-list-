module.exports = mongoose =>{
    mongoose.model('Todo',{
        title: { type: String, required: true},
        isCompleted: { type: Boolean, required: true},
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    })
}