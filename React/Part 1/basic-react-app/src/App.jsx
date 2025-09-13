import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// 1]]]-------> Render Title ,Describe  and Name when Inside App.jsx 

// function Title() {
//   return(
//     <div>
//       <h1>I am TITLE</h1>
//     </div>
//   );
// }
// function Describe() {
//   return (<p>I am description of Title</p>);
// }
// function Name() {
//   return <p>I am Aditya</p>;
// }

// function App() {
//   return(
//     <div>
//       <h5>I am .......</h5>
//       <Name/>
//       <Title/>
//       <Describe/>

//     </div>
//   );
  
// }
// export default App




// 2]]-------> Import/Export
// 2.a]========> Default import/export

// import Title from './Title.jsx';
//  function App() {
//  return(
//   <div>
//     <Title/>
//   </div>
//  );
  
// }
// export default App



// 2.b]========> Named import/export

// import {Describe, Title} from './Title.jsx';
//  function App() {
//  return(
//   <div>
//     <Title/>
//     <Describe/>
//   </div>
//  );
  
// }
// export default App


// 3]]----------> Structring components
// with react fragement
import Product from "./Product.jsx" ;
import ProductTab from "./ProductTab.jsx";
function App() {
  return(
    <>

      {/* <Product/>
      <Product/>
      <Product/> */}

       {/* Appart from these */}


       <ProductTab/>
       
    </>
  );
  
}
export default App;







