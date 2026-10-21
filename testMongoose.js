const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2026');


const styles = mongoose.model('styles', { name: String });


const new_style = new styles({ name: 'Lightning' });
new_style.save().then(() => console.log('Alone'));
