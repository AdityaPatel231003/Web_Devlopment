
let count=0;

export default function State(){
    
    function increase() {
        count+=1;
        console.log(count);
        
    }

    

    return(
            <>
                <h1>Count={count}</h1>
                <button onClick={increase}>Increase Count</button>
            </>
    )
}
