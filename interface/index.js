const sayHelloButton = document.getElementById('sayHelloButton');
const connectSpotifyButton = document.getElementById('connectSpotifyButton');

connectSpotifyButton.addEventListener('click', function(){
    console.log('connect spotify button pressed!');

    try{

        const requestOptions = {
            method: 'GET',
            // mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(postData),
        };

        fetch('http://localhost:3500/spotify/connect', requestOptions)
        .then(response => response.json())
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error(error);
        });
    }
    catch(error){
        console.error('something went wrong - ' + error);
    }
});

sayHelloButton.addEventListener('click', function(){
    console.log('hello button pressed');

    try{
        fetch('http://localhost:3500/hello/')
        .then(response => response.json())
        .then(response => {
            console.log(response);
        })    
    }
    catch(error){
        console.error('something went wrong - ' + error);
    };
});