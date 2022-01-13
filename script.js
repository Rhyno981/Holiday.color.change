var element = document.querySelectorAll("li.li1");

for (i=0;i<element.length; i++){
    if (i %2 === 0){
        element[i].className = "green";
    }
    else{
        element[i].className ="yellow";
    }
}