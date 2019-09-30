function moveTapline(event){
   // var tapLine=document.getElementsByClassName("tapline")[0];
    var tapLine=document.querySelector("div[class*=tapline]");
    // console.log( event.target);
    var tapElement=event.target;
    var index=tapElement.getAttribute("index");
    //tapLine.setAttribute("class","tapline_"+index);
    var moveDistance=index*300;
    tapLine.style.cssText="transform: translateX("+moveDistance+"px);"

}
function clickTap(evnet){
    var tapElement=event.target;
    var index=tapElement.getAttribute("index");
    var taps=document.getElementsByClassName("tap");
    var texts=document.getElementsByClassName("text");
    for(var i=0;i<texts.length;i++){
        if(i==index){
            taps[i].style.color="#ffffff";
            texts[i].style.display="block";
        }else{
            taps[i].style.color="rgba(255, 255, 255, 0.7)";
            texts[i].style.display="none";
        }

    }

    
}

