const url = 'https://api.quotable.io/random';
function generateQuote(){
    fetch(url)
    .then(function(data){
        console.log(data.json);
        return data.json();
    })
    .then(function(data){
        document.getElementById('quote') == data.content;
        console.log(data.content);
        document.getElementById('qauthor') == "-" + data.author;
        console.log(data.author);
    })
    .catch(function(err){
        console.log(err);
    });
}

// let btn = document.getElementById('btn');
// btn.addEventListener('load', generateQuote);
window.addEventListener('load', generateQuote);





