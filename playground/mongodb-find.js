// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDb server');

// db.collection('Todos').find({
//   _id : new ObjectID('5b4627bc899b5ae748600691')
// }).toArray().then((docs) => {
//   console.log('Todos');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log("Unable to fetch todos", err);
// });


// db.collection('Todos').find().count().then((count) => {
//   console.log(`Todos: ${count}`);
// }, (err) => {
//   console.log("Unable to fetch todos", err);
// });

db.collection('Users').find({name: 'Aaron'}).toArray().then((docs) => {
  console.log(JSON.stringify(docs,undefined, 2));
}, (err) => {
  console.log("Unable to fetch Users", err);
});
  //db.close();
});