const express=require('express');
const methodOverride=require('method-override');
const { v4: uuidv4 } = require('uuid');
const path=require('path');

const mysql=require('mysql2');



const connection=mysql.createConnection({
    host:"localhost",
    database:"your_app",
    user:"root",
    password:"root"
})


const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,"/views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static("public/css"))

// allcount
app.get('/',(req,res)=>{
    let q1=`SELECT count(*) from user`;
try {
    connection.query(q1,(err,result)=>{
    if (err) throw err; 
    
    let user=result[0]['count(*)'];
    res.render('home.ejs',{user});
})
} catch (err) {
    console.log(err);
    
}
});

// all users
app.get('/user',(req,res)=>{
    let q1=`SELECT * from user`;
try {
    connection.query(q1,(err,result)=>{
    if (err) throw err; 
    let users=result;

    res.render('alluser.ejs',{users});
})
} catch (err) {
    console.log(err); 
}
});

// Edit
app.get('/user/:id/edit',(req,res)=>{
    let {id}=req.params;

    let q1=`SELECT * from user where id='${id}'`;
try {
    connection.query(q1,(err,result)=>{
    if (err) throw err; 

    let users=result[0];
    res.render('alledit.ejs',{users});
})
} catch (err) {
    console.log(err); 
}
});

app.patch('/users/:id/',(req,res)=>{
    let {id}=req.params;
    let {username:newusername,email:newemail,password:newpassword}=req.body;

    let q1=`SELECT * from user where id= '${id}'`;
try {
    connection.query(q1,(err,result)=>{
    if (err) throw err;
    let anspassword=result[0];

   if(newpassword!=anspassword.password){
    res.send('WRONG PASSWORD..');
   }
   else{
    
    let q2=`UPDATE user set username= '${newusername}', email= '${newemail}' where id='${id}'`;
             try {
                connection.query(q2,(err,result)=>{

                    if (err) throw err; 
                    res.redirect('/user');
                    
                })
             } catch (err) {
                console.log(err);
             }
   }
})
} catch (err) {
    console.log(err); 
}
});



app.get('/user/add',(req,res)=>{
    let id=uuidv4();
    res.render('add.ejs',{id});
})

app.post('/user/:id/add',(req,res)=>{
    let {id}=req.params;
    let{username,email,password}=req.body;

    let q1=`INSERT INTO user(id,username,email,password) values (?,?,?,?)`;
    let data=[`${id}`,`${username}`,`${email}`,`${password}`];

    try {
    connection.query(q1,data,(err,result)=>{
         if (err) throw err; 
         console.log(result);
         res.redirect('/user');
    
    })
    } catch (err) {
    console.log(err);
    
    }

})



app.get('/user/:id/del',(req,res)=>{
    let {id}=req.params;
    let q1=`select * from user where id='${id}'`;
    

    try {
        connection.query(q1,(err,result)=>{
            if(err)throw err;
            console.log(result);
            let users=result[0];
            res.render('delete.ejs',{users});
        })

        
    } catch (err) {
        console.log(err);
    }
})



app.delete('/user/:id/delete',(req,res)=>{
    let {id}=req.params;
    let{password:newpassword}=req.body;
let q1=`select * from user where id='${id}'`;
    try {
        connection.query(q1,(err,result)=>{
            if(err)throw err;
           
            let users=result[0];
            if(users.password!=newpassword) res.send('wrong PAssword');
            else{
                let q2=`DELETE from user where id='${id}'`;
                    try {
                         connection.query(q2,(err,result)=>{
                        if(err) throw err;
                                console.log(result);
                                res.redirect('/user');
                              })
                         } catch (err) {
                              console.log(err);
                            }
            }
        })  
    } catch (err) {
        console.log(err);
    }


    
    



})








app.listen(8080,()=>{
    console.log("SERVER started ............");
})