// let url='https://api.frankfurter.app/latest?amount=1&from=USD&to=EUR';
// let url='https://api.frankfurter.app/latest?amount=';

// let url='https://api.exchangerate.host/convert?from=INR&to=PKR&amount=1';
// let url='https://api.exchangerate.host/convert?';

// let url='https://currency-rate-exchange-api.onrender.com/inr';
let url='https://currency-rate-exchange-api.onrender.com/';

// let url2='https://restcountries.com/v3.1/name/india?fullText=true';
let url2='https://restcountries.com/v3.1/name/';


let amt=document.querySelector('#amt');
let fromc=document.querySelector('#fromc');
let toc=document.querySelector('#toc');



let btn=document.querySelector('button');
btn.addEventListener('click',async function(){
   let amount=amt.value;
   let value1=fromc.value;
   let value2=toc.value;

    let send1=value1+'?fullText=true';
    let send2=value2+'?fullText=true';


     
    let from=await getConvert2(send1);
    let  to= await getConvert2(send2);

    // let queryString='from='+from+'&to='+to+'&amount='+amount;
      let queryString=from;
    let result=await getConvert(queryString,to);
    let p=document.querySelector('p');
    p.innerHTML=`${amount}${from} of ${fromc.value} is equal to <b>${result}</b>   ${to}  of ${toc.value}`
          


});


async function getConvert(add,to){
    try {
            url='https://currency-rate-exchange-api.onrender.com/';
            add=add.toLowerCase();
            to=to.toLowerCase();
            let res= await axios.get(url+add);
          let rate=res.data.rates[add.toLowerCase()];
          let resul=rate[to.toLowerCase()];
         console.log(resul);
          return resul;   

    } catch (error) {
         console.log( "Error :",error);
    }

};

async function getConvert2(add){
    try {
             url2='https://restcountries.com/v3.1/name/';
            let res= await axios.get(url2+add);
             let currencies=res.data[0].currencies;
             let currenciesCode=Object.keys(currencies);
             console.log(currenciesCode[0]);
             
           return currenciesCode[0];
    } catch (error) {
         console.log( "Error :",error);
        
    }

};



