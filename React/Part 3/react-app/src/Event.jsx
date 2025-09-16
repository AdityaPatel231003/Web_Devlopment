function clickedFun() {
    console.log("Clicked Fun")  
}
function mouseOverFun() {
    console.log("mouseOver")
}
 function Event() {
    return(
        <>
            <h1>Event</h1>
            <button onClick={clickedFun}>Click me</button>
            <p onMouseOver={mouseOverFun} >onMouseOver Lorem ipsum dolor sit amet.</p>
        </>
    );
    
}
export default  Event