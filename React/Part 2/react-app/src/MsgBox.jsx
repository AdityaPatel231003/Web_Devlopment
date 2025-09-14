export default function MsgBox({name,color}){
    let styles={color:color};

    return(
       

       <div style={styles}>
         <h1>Hello, {name}</h1>
       </div>
        
    );
}