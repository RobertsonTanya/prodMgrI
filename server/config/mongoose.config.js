const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/prodmgri', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Established a connection with the Product Manager I database'))
    .catch(err => console.log('Something went wrong connecting to the Product Manager I database', err));