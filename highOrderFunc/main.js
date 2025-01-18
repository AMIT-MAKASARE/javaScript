function high(func,n){
    for(let i=1;i<=n;i++){
        func()
    }
}



let greet=function(){
    console.log("hello");
    
}
high(greet,4)