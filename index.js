const express = require('express');
const app = express();
const port = 3000;
const students = [

    {
        id: 1,
        name: 'samson',
        age: 20,
        course: 'cyber securty'
    },

    {
        id: 2,
        name: 'philips',
        age: 20,
        course: 'web development'
    },

    {
        id: 3,
        name: 'solomon',
        age: 21,
        course: 'mech engineering'
    },

    {
        id: 4,
        name: 'jane',
        age: 19,
        course: 'databse management'
    },

    {
        id: 5,
        name: 'rebecca',
        age: 22,
        course: 'artififcial intelligence'
    },

    {
        id: 6,
        name: 'sola',
        age: 20,
        course: 'information tech'
    },

     {
        id: 7,
        name: 'susan',
        age: 21,
        course: 'product designing'
    },

     {
        id: 8,
        name: 'peter',
        age: 24,
        course: 'hardware engineering'
    },

     {
        id: 9,
        name: 'joy',
        age: 20,
        course: 'data analysis'
    },

     {
        id: 10,
        name: 'sulaimon',
        age: 20,
        course: 'data science'
    },
]


app.get('/', (req, res) => {
    // res.send('welcome to my express sever!');
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    // console.log(__dirname);
    
})

app.get('/api', (req,res) => {
    res.json(students);
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
