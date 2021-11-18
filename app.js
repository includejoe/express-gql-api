const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

// connect to db
dbURL = "mongodb+srv://includejoe:test12345@graphqlcoursedb.q1nnq.mongodb.net/graphqlcoursedb?retryWrites=true&w=majority";
mongoose.connect(dbURL);
mongoose.connection.once('open', () => {
    console.log('connected to database');
})

const app = express();

// allow cross-origin requests
app.use(cors());

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});