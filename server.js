const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, (err, db) => {

    db.collection('Cars').insertOne({
        model: 'Ford',
        year: '2017'
    })
    db.close();
})