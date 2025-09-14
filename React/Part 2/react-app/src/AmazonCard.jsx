import './AmazonCard.css'
import AmazonPrice from './AmazonPrice';

export default function AmazonCard({title,description,idx}){
    let list=description.map((el)=> <li>{el}</li> );

   let  oldprices=["1299","2345","1588","677"];
    let newprices=["1199","2005","1088","277"];
  

    return(
            <div className="AmazonCard">
                <h4>{title}</h4>
                <p>{list}</p>
                <AmazonPrice oldprice={oldprices[idx]} newprice={ newprices[idx]}/>
                

            </div>
    );
}