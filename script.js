//Unsplash API
const count = 10;
const apiKey = 'tUNU8LB3oNHX0-jWfhfzjw1l5UY37s_D85VDwCMqCGU';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// get Photos fron Unsplash API
async function getPhotos(){
    try{
        const response = await fetch(apiUrl)
        const data = await response.json()
        console.log(data);
    } catch(error){
        //catch error here
    }
}

//onload
getPhotos()