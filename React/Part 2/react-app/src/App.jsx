import './App.css'
import ProductTab from './ProductTab.jsx'
import MsgBox from './MsgBox.jsx';
import AmazonTab from './AmazonTab.jsx';

function App() {
  return(
        <>
        <MsgBox name="Aditya" color="violet"/>
        <ProductTab/>
        <h1>BlockBaster Deals Shop Know</h1>
        <AmazonTab/>
        

        </>
  );
  
}
export default App;
