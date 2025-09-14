import Product from "./Product.jsx";

// 1] Props
//  2] Renderring Arrays 

function ProductTab() {
    // Array Into Props
     let options=["hi-tech","durable","fast"];
    // let feature=[<li>"hi-tech"</li> , <li>"durable"</li>, <li>"fast"</li>];

     //Object Into Props
     let optionsObj={a:"hi-tech",b:"durable",c:"fast"};
   
    return(
        <>
        {/* <Product/> */}
        <Product title="Laptop" price={150000} Num={2} feature={ ["hi-tech","durable","fast"] }  features={{a:"hi-tech",b:"durable",c:"fast"}} />
         <Product title="I-PHONE" price={95000} Num={4}   feature={options} features={optionsObj}   />
        <Product title="PEN"  Num={3}  feature={options} features={optionsObj}    />
       
        </>
    );
    
}
export default ProductTab