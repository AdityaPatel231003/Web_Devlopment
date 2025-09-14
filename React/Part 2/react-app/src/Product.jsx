import './Product.css';

// 1] Props
//  2] Renderring Arrays 

function Product({ title,price=10,Num=1,feature,features}) {
   let list= feature.map((features)=><li>{features}</li> );

//    Dynamic Styling
   let styles={backgroundColor: price>100 ? "yellow" : null}

    return(
        <div className="Product"  style={styles}>
            <h1>Product {Num}: {title}</h1>
            <h3>Price: {price}</h3>
            <p>{feature}</p>
            <p>{list}</p>
            <p>{features.b}</p>

            
         {/* Extra Node created--->  in false condition " "*/}  
          <p>{price>100 ? "Discount of 5% " : ""}</p>
            {price>100 ? <p> Discount of 5% </p> : null}
  
        </div>
    );
    
}
export default Product