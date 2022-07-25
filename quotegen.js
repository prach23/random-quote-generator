const url = 'https://api.quotable.io/random';
function generateQuote(){
    fetch(url)
    .then(function(response){
        console.log(response.json);
        return response.json();
    })
    .then(function(data){
        document.getElementById('quote').innerHTML == data.content;
        console.log(data.content);
        document.querySelector('h2').firstChild.nodeValue = data.content;
         document.getElementById('qauthor') == "-" + data.author;
        console.log(data.author);
        document.querySelector('h4').firstChild.nodeValue = data.author;
    })
    .catch(function(err){
        console.log(err);
    });
}

// let btn = document.querySelector('btn');
// btn.addEventListener('load', generateQuote());
window.addEventListener('load', generateQuote());





