const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res) => {
    /*

    const schema = {
        name: Joi.string().min(4).required()
    };

    const result = Joi.validate(req.body, schema);
    /*
    if(!req.body.name || req.body.name.length < 3) {
        //400 Bad request
        res.status(400).send('Name is required and should be minimum 3 characters');
        return;
    }*/

   /* if(result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
        // name is required
        //"name" length must be at least 4 characters long

    }*/

    const { error } = validateCourse(req.body); //result.error

    // name is required
    //"name" length must be at least 4 characters long
     if(error) return res.status(400).send(result.error.details[0].message);
        
     

    const course = {
        id: parseInt(courses.length) + 1,
        name: req.body.name
    }; 
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    //Look up the course
    //If not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) 
        return res.status(404).send('Course with the given ID was not found...');//then return 404

     //Validate
    //If invalid, return 400 - Bad Request
    //const result = validateCourse(req.body);
    const { error } = validateCourse(req.body); //result.error

   // name is required
   //"name" length must be at least 4 characters long
    if(error)  return res.status(400).send(result.error.details[0].message);
        
    //Update course
    course.name = req.body.name;
    //Return the updated course
    res.send(course);
   
});

function validateCourse(course) {
    
    const schema = {
        name: Joi.string().min(4).required()
    };

   return Joi.validate(course, schema);
}

app.delete('/api/courses/:id', (req, res) => {
    //Look up the course
    //Not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('Course with the given ID was not found...');//then return 404

    //Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1); // Go to the object and remove one object

    //Return the same course
    res.send(course);
});

app.get('/api/courses/:id', (req, res) => {
    //res.send(req.params.id);
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('Course with the given ID was not found...');//then return 404
    res.send(course);
});

app.get('/api/courses/:year/:month', (req, res) => {
    //res.send(req.params);
    res.send(req.query); //http://localhost:5000/api/courses/2018/1?sortBy=name
});



//PORT
//set PORT=5000 in command promp - for setting the environment variable
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));