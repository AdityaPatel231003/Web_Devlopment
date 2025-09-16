import { useState } from "react"

// Hooks can only be inside functional Components


export default function LikeButton() {
    let[isLike,setIsLike]=useState(false);
    let[count,setCount]=useState(0);
    console.log("outside-->",isLike)

    function toggle() {    
            setIsLike(!isLike)
            setCount(count+1);
            console.log(isLike);
    }
      let styles={color: 'red'};

    return(
      
        <>

            <p onClick={toggle}>

            {
                isLike ? <i className="fa-solid fa-heart" style={styles}></i> :<i className="fa-regular fa-heart"></i>
            }

            </p>
            <p>count={count}</p>
        </>
    )

    
}