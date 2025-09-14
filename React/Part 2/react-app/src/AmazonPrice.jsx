import './AmazonPrice.css';

export default function AmazonPrice({oldprice,newprice}) {
    let newstyles={ fontWeight:"bold"

    }
    return(
        <div className="AmazonPrice">

            <span id='oldprice'>{oldprice}</span>    &nbsp; &nbsp; &nbsp;
           <span style={newstyles}>{newprice}</span>

        </div>
    );
    
}