var articles = document.querySelectorAll('article:not(#checkout)');

console.log(articles)

for(article of articles){
    article.children[6].addEventListener('click', function(event){
        event.target.parentElement.remove();
        Sum();
    });
    
    article.children[4].addEventListener('click', function(event){
        event.target.parentElement.children[3].innerHTML = parseInt(event.target.parentElement.children[3].innerHTML) + 1;
        event.target.parentElement.children[5].children[0].innerHTML = 100 * parseInt(event.target.parentElement.children[3].innerHTML)
        Sum();
    })
    
    article.children[2].addEventListener('click', function(event){
        if(parseInt(event.target.parentElement.children[3].innerHTML) > 0)
        event.target.parentElement.children[3].innerHTML = parseInt(event.target.parentElement.children[3].innerHTML) - 1;
        event.target.parentElement.children[5].children[0].innerHTML = 100 * parseInt(event.target.parentElement.children[3].innerHTML)
        Sum();
    })
 
    article.children[7].addEventListener('click', function(event){
        if(event.target.classList.contains("far"))
            event.target.classList.replace("far","fas")
        else
            event.target.classList.replace("fas","far")
    })
}

function Sum(){
    var prices = document.querySelectorAll(".money")
    var s = 0
    for ( price of prices){
        s += parseInt(price.innerHTML)
    }
    console.log(s)
    document.querySelector("#price").innerHTML = s
}

Sum();



