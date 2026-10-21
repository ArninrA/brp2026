const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2026');

var schema = mongoose.Schema({ name: String })
schema.methods.knowledge = function(){
   console.log(this.name + " is alone")
}

const styles = mongoose.model('styles', schema);




const new_style = new styles({ name: 'Lightning' });
new_style.save().then(() => new_style.knowledge());
