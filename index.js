const express = require("express")

const app = express()

//==================== METODO GET ========================
app.get('/', (req,res) => { res.json({msg:'hello get'})})

//======================= ENDPOINT ============================

//paramns, query y patch
//uso de la destructuracion
app.get("/:user/:password",(req,res) => {//ednpoint es el conjuto del metodo http, la ruta 
    const {user,password} = req.params
    if(user == 'Miguel' && password == '123'){
        res.json({msg:'Inicio de sesion exitoso'})
        return
    }
        res.json({msg:'Fallo en el usuario y contraseña'})
    })
//==========================QUERY=================================

//http://localhost:3000/login?fullname=miguel%20angel%20cruz%20vargas
//http://localhost:3000/login?user=miguel&pws=123

app.get('/login' ,(req , res) =>{const{user,password}=req.query 
if(!user|| !password){
    res.json({msg:'You need to provide <user> and <password> params'})
}  

if(user == 'Miguel' && password =='123'){
    res.json({msg: 'Sing in succesfull'})
    return
}
res.status(404).json({msg:'wrong user or password'})

})

//=======================METODO POST =====================================

app.post("/",(req,res) => {
    res.json({
        msg:'Hello Post'
    })
})








app.put("/",(req,res) =>{
    res.json({
        msg:'Hello put'
    })
})

app.patch("/",(req,res) =>{
    res.json({
        msg:'Hello PATCH'
    })
})

app.delete("/",(req,res) =>{
    res.json({
        msg:'Hello DELETE'
    })
})


  
/*
funcionalidad
*/
//http://localhost:3000/
app.listen(3000,() =>{
    console.log("listening on port 3000")
})