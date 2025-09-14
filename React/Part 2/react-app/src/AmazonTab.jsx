import AmazonCard from "./AmazonCard.jsx";
import './AmazonTab.css'

function AmazonTab() {
    return(
        <div className="AmazonTab">
            
            <AmazonCard title="Logitech MX MAster 35" description={ ["8,000 DPI","5 Programmable button"]} idx={0} />   
            <AmazonCard title="Apple Pencil" description={["designed for i-pad","touch surface"]} idx={1}/>
            <AmazonCard title="Zebronic Keyboard" description={["designed for i-pad","touch surface"]} idx={2}/>
            <AmazonCard title="Portronics Toad 23" description={["optical Orientation","Wireless Mouse"]}  idx={3}/>
        </div>
    );

    
}
export default AmazonTab