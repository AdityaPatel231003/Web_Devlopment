function generatenewticket(n) {
    let newarr=new Array(n);
    for (let i = 0; i< n; i++) {
        newarr[i]=Math.floor(Math.random()*10);
           
    }  
    return newarr;
}

function ticketsum(array) {
        return array.reduce((prev,curr)=>prev+curr,0)
}
export {generatenewticket,ticketsum}