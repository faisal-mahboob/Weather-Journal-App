// Setup empty JS object to act as endpoint for all routes
const moData=[];

// Express to run server and routes
const express=require('express');

// Start up an instance of app
const app=express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

const port=10000;
// Spin up the server
const server = app.listen(port,listening);


// Callback to debug
function listening() {
    console.log('The server is running');
    console.log(`The server is running in localhost: ${port}`);
}

// Initialize all route with a callback function


//Dummy endpoint

const fakeData = {
    animal:'lion',
    fact:'lions are fun'
}

app.get('/fakeAnimalData',getFakeData);

function getFakeData(req,res){
    res.send(fakeData);
}


const pData=[];

// Callback function to complete GET '/all'
app.get('/all',function(req,res){
    res.send(pData);
});


// Post Route
app.post('/addAnimal',function(req,res){

    const newEntry={
        animal:req.body.animal,
        fact:req.body.fact,
        fav:req.body.fav
    }

    pData.push(newEntry);
    res.send(pData);
    console.log(pData);
    //pdata.push(req.body);
    //moData.push(req.body);
    //res.send('post received');
    //console.log(pdata);
    //console.log(moData);
}); 
