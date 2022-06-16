const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/prodmgrii', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Established a connection with the Product Manager II database'))
    .catch(err => console.log('Something went wrong connecting to the Product Manager II database', err));