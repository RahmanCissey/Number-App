let button = document.getElementById("searchbtn");
let searchBox = document.getElementById("searchbox");
let result = document.getElementById("result");
let num = document.getElementById("num");



button.addEventListener("click", function(e) {

    
    fetch(`http://numbersapi.com/${searchBox.value}?json`)
    .then(function(res) {
        num.innerText = data.num
        return res.json();
        })
        .then(function (data) {
            result.innerText = data.text;
        });
});