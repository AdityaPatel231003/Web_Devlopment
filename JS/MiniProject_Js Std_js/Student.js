

 roll=undefined
nam=undefined
 branch=undefined
 dbms=undefined
 cn=undefined
 os=undefined

 stdarray=[];



function start(){

    roll=document.getElementById("roll");
    nam=document.getElementById("nam");
    branch=document.getElementById("branch");
    dbms=document.getElementById("dbms");
    cn=document.getElementById("cn");
    os=document.getElementById("os");
  

   
//    stddata=localStorage.getItem("mydata");
//    std=JSON.parse(stddata);

//    for(s of std){
//     stdarray.push(stdobj);
//    }

 

}

function add() {
vroll=roll.value;
vnam=nam.value;
vbranch=branch.value;
vdbms=(parseInt(dbms.value));
vcn=(parseInt(cn.value));
vos=(parseInt(os.value));
vtotal=(vdbms+vcn+vos);


stdobj={vroll,vnam,vbranch,vdbms,vcn,vos,vtotal};
stdarray.push(stdobj);
add2table(stdobj);

    
}

function add2table(obj){
    
    table=document.getElementById("tbody");

    newrow=table.insertRow();


rollcell=newrow.insertCell(0);
namcell=newrow.insertCell(1);
branchcell=newrow.insertCell(2);
 dbmscell=newrow.insertCell(3);
cncell=newrow.insertCell(4);
 oscell=newrow.insertCell(5);
 totalcell=newrow.insertCell(6);

 discardcell=newrow.insertCell(7);
 
 rollcell.textContent=obj.vroll;
 namcell.textContent=obj.vnam;
 branchcell.textContent=obj.vbranch;
 dbmscell.textContent=obj.vdbms;
 cncell.textContent=obj.vcn;
 oscell.textContent=obj.vos;
 totalcell.textContent=vtotal;

const  button=document.createElement("button");
 button.textContent ="Delete";
button.setAttribute("class","btn btn-danger btn-sm");
discardcell.appendChild(button); 
 button.onclick = function(){
      newrow.remove();
      stdarray=stdarray.filter((item)=>item.vroll!=obj.vroll);
    save();
 };
 
 


}



function save(){
    // into JSON format
    stddata=JSON.stringify(stdarray);
    localStorage.setItem("mydata",stddata);
 
}

savebtn=document.querySelector('#save');
savebtn.addEventListiner('onclick',()=>{
    save();
})