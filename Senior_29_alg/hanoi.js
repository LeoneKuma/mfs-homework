function move(from,to){
    console.log(from+" -> "+to);
}
function hanoi(from,via,to,n){
    if(n==1){
        return move(from,to)
    }
    hanoi(from,to,via,n-1);
    move(from,to);
    hanoi(via,from,to,n-1);
}

hanoi("A","B","C",5)