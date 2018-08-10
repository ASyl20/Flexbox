$(document).ready(function(){
    document.querySelector('.btn').addEventListener("click",function(evt){
        $('nav ul').slideToggle(1000)
    })
})