/* 
 const pName=document.getElementById("text-product-name").value;
 const commentsDiv=document.getElementById("comments");

 commentsDiv.innerHTML += "<section class = 'comment'>new comment " +pName +"</section>";

 +comments section{

 }
*/

const moveSquare=()=> {
    //document.getElementById("square").classList.toggle("move-square");

    const square=document.getElementById("square");
    const button=document.getElementById("button-move");
     
    //is it currently animating
    if(square.classList.contains("move-square")){
        square.classList.remove("move-square");
        button.innerHTML="Start";
    }
    else{
        square.classList.add("move-square");
        button.innerHTML="Stop";
    }

}


window.onload=()=> {
    document.getElementById("button-move").onclick=moveSquare;
    
}