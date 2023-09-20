const express = require("express")

const app = express()

app.get("/:user/:password",(req,res) => {
    const {user,password} = req.params
    if(user == 'Miguel' && password == '123'){
        res.json({msg:'Inicio de sesion exitoso'})
        return
    }
        res.json({msg:'Fallo en el usuario y contraseña'})
    })

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