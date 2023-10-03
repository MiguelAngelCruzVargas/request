const express = require("express")

const app = express()
app.use(express.json() )
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
//http://localhost:3000/login?user=miguel&password=123

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

//======================================================================

//====================== METODO POST ====================================

app.post("/",(req,res) => {
    res.json({
        msg:'Hello Post'
    })
})

//=========================================================================

//=======================METODO PUT=======================================
app.put("/",(req,res) =>{
    res.json({
        msg:'Hello put'
    })
})

//==========================================================================

//=======================METODO PATCH=======================================
app.patch("/",(req,res) =>{
    res.json({
        msg:'Hello PATCH'
    })
})
//========================================================================

//============================METODO DELETE===============================
app.delete("/",(req,res) =>{
    res.json({
        msg:'Hello DELETE'
    })
})

//==================================METODO BODY==========================
//si sin pocos atributos params si muchos    Query

app.post('/login', (req, res) => {
    const {user,password} =req.body
    if(!user|| !password){
    res.status(404).json({msg:'You need to provide <user> and <password>'})
}  

if(user == 'Miguel' && password =='123'){
    res.json({msg: 'Sing in succesfull'})
    return
}
res.status(404).json({msg:'wrong user or password'})
    })

//=======================================================================
/*
funcionalidad
*/
//http://localhost:3000/
app.listen(3000,() =>{
    console.log("listening on port 3000")
})