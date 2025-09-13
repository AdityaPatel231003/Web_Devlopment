import './Product.css'
function Product() {
    let name="Aditya";
    return(
       
        <div className="Product">
            <h1>Hiii I am {name.toUpperCase()}</h1>
            <h3>Btech Std {6+1} sem</h3>

        </div>
        
    );
    
}
export default Product;