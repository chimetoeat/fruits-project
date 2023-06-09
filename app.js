const { Long } = require('mongodb');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

const fruitsSchema = mongoose.Schema ({
  name: {
    type: String,
    required: [true, "hays"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
})

const Fruit = mongoose.model("Fruit", fruitsSchema)

const fruit = new Fruit ({
  name: "Test",
  rating: 5,
  review: "Pretty solid."
})

// fruit.save();

// const kiwi = new Fruit ({
//   name: "Kiwi",
//   rating: 8,
//   review: "Pretty solid."
// })

// const orange = new Fruit ({
//   name: "Orange",
//   rating: 9,
//   review: "Pretty solid."
// })

// const banana = new Fruit ({
//   name: "Banana",
//   rating: 10,
//   review: "Pretty solid."
// })

// Fruit.insertMany([kiwi, orange, banana]).then(function() {
//   console.log("Successfully saved all the fruits to fruitsDB");
// }).catch(function (err) {
//   console.log(err);
// })



Fruit.find().then(function(fruits) {
    setTimeout(() => {
        mongoose.connection.close();
    }, 5);
    fruits.forEach(function(myFruit) {
      console.log(myFruit.name)
    })
  }).catch(function (err) {
    console.log(err);
  })


// Fruit.updateOne({_id: "6481fb892b002f4d54c5fa6a"}, {name: "Peach"}).then(function() {
//     console.log("Successful.");
//   }).catch(function (err) {
//     console.log(err);
//   })

// Fruit.deleteOne({name: "Peach"}).then(function() {
//       console.log("Successful deletion.");
//     }).catch(function (err) {
//       console.log(err);
//     })



const personsSchema = mongoose.Schema ({
  name: String,
  age: Number,
  favoriteFruit: fruitsSchema
})

const Person = mongoose.model("Person", personsSchema)

const pineapple = new Fruit ({
  name: "Pineapple",
  rating: 9,
  review: "Good."
})

// pineapple.save()

const person = new Person ({
  name: "Amy",
  age: 12,
  favoriteFruit: pineapple
})



// Person.deleteMany({name: "John"}).then(function() {
//   console.log("Successful deletion many.");
// }).catch(function (err) {
//   console.log(err);
// })

// person.save()

const mango = new Fruit ({
  name: "Mango",
  rating: 10,
  review: "The Best"
})

// mango.save()

Person.updateOne({name: "John"}, {favoriteFruit: mango}).then(function() {
    console.log("Successful update.");
  }).catch(function (err) {
    console.log(err);
  })



// Connection String
// mongodb+srv://admin:admin@cluster0.n0jbkzk.mongodb.net/?retryWrites=true&w=majority  | , { userNewUrlParser: true }) 