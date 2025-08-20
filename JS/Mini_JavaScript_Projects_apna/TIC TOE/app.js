let startboolean=false;
let start=document.querySelector('#start');
let p=document.querySelector('p');


start.addEventListener('click',function () {
         if (startboolean==false){
            console.log('start');
            startboolean=true;
                userCall();
                
         }

});






let array=[['one','two','three'],['four','five','six'],['seven','eight','nine']];
function userCall() {
    let users=document.querySelectorAll('.fone');
         for (const user of users) {
            user.addEventListener('click' ,function () {
            console.log(user);
                    let checkans=add(user);

                    if(checkans=='red'){
                         p.innerText="Red WIN";
                        return;
                         
                    }
                    else if(checkans=='green'){
                        p.innerText="GREEN WIN";
                        return;
                    }
            });    
         }

    
                 
}

    // add();
      let set=0;
 function add(user){
    let userid=user.id;
   for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){

            if(userid==array[i][j] && set==0){
                user.style.backgroundColor='red';
                array[i][j]=0;
               let ans=check(i,j);
               if(ans==1){
                return 'red';
               }
                set=1;   
            }
           else if(userid==array[i][j] && set==1){
               user.style.backgroundColor='green';
                array[i][j]=1;
                let ans=check(i,j);
               if(ans==1){
                return 'green';
               }
                set=0;
            }
         }
   }
  
// draw();

}



// check()
function check(i,j) {
   

            // Horizontal
            if((array[0][0]==array[i][j])&&(array[0][1]==array[i][j])&&(array[0][2]==array[i][j])){
                return 1;
                
            }
           else if((array[1][0]==array[i][j])&&(array[1][1]==array[i][j])&&(array[1][2]==array[i][j])){
                return 1;
              
            }
            else  if((array[2][0]==array[i][j])&&(array[2][1]==array[i][j])&&(array[2][2]==array[i][j])){
                return 1;
             
            }

            // Vertical
           else   if((array[0][0]==array[i][j])&&(array[1][0]==array[i][j])&&(array[2][0]==array[i][j])){
               return 1;
            }
            else  if((array[0][1]==array[i][j])&&(array[1][1]==array[i][j])&&(array[2][1]==array[i][j])){
              return 1;
            }
            else  if((array[0][2]==array[i][j])&&(array[1][2]==array[i][j])&&(array[2][2]==array[i][j])){
               return 1;
            }

            // Diagonal
            else  if((array[0][0]==array[i][j])&&(array[1][1]==array[i][j])&&(array[2][2]==array[i][j])){
                return 1;
            }
           else   if((array[0][2]==array[i][j])&&(array[1][1]==array[i][j])&&(array[2][0]==array[i][j])){
               return 1;
            }
            else{
                let count=0;
                for (let m = 0; m < array.length; m++) {
                      for (let n = 0; n< array.length; n++) {
                            if(array[m][n]==0 || array[m][n]==1){
                                count++;
                            }
                }    
                }
                if(count==9){
                    p.innerText="DRAW";
                }
            }
   
            return 0;
    
    
}





let restart=document.querySelector('#restart');
restart.addEventListener('click',function() {
    startboolean=false;
     array=[['one','two','three'],['four','five','six'],['seven','eight','nine']];
     let fones=document.querySelectorAll('.fone');
     for (let fone of fones) {
        fone.style.backgroundColor='';
        p.innerText='';
        fone.classList.add('white');
        
     }
     set=0;
    
    
});
