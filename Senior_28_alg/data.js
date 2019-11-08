module.exports= {
     getRandomArray(length){
        var randomArray=new Array(length);
        var {floor,random}=Math;
        for(var i=0;i<length;i++){
            randomArray[i]=floor(random()*length);
        }
        return randomArray;
    }
}


