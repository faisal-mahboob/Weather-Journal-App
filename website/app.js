//const {response}=require("express");

const baseURL = "http://api.animalinfo.org/data/?animal=";
const apiKey = "&appid=9f15e45060...";

document.getElementById('but').addEventListener('click',perform);

function perform(e){
  const city=document.getElementById('cityio').value;
  allData(baseURL,city,apiKey)
  .then(function(nData){
    postData('/addAnimal',{animal:nData.animal,fact:nData.fact,fav:city})
  })
  .then(
    updateUI()
  )
}

const allData = async (baseURL,city,apiKey)=>{
    //console.log(data);
    //const request = await fetch (baseUrl+city+apiKey);
    const request = await fetch('/fakeAnimalData');
        try{
        const nData = await request.json();
        console.log(nData);
        return nData;
    }
    catch(error){
        console.log('error',error);
    }
}

//allData('/addMovie', {movie:'matrix', score:5});


const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

  
  const updateUI = async()=>{
    const request = await fetch('/all');
    try {
      const allData = await request.json();
      document.getElementById('t1').innerHTML = allData[0].animal;
      document.getElementById('t2').innerHTML = allData[0].fact;
      document.getElementById('t3').innerHTML = allData[0].fav;
    }
    catch(error){
      console.log('error',error);
  } 
}



//postData('/add', {answer:42});   

 
