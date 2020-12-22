const express = require ('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const pesanModel = require('./models/pesan')
require("dotenv").config()

app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://tristiannn:<password>@cluster0.9lfwz.mongodb.net/crud?retryWrites=true&w=majority",
    {
        useNewUrlParser:true,
    })


app.listen(process.env.PORT || 3001, () => {
    console.log('server running on 3001')
})

app.post('/insert', async (req,res) => {
    const nama = req.body.namaPengirim
    const pesan = req.body.pesanPengirim
   
    const pesanDB = new pesanModel ({
        namaPengirim: nama,
        pesanPengirim: pesan,
    })
    try {
        await pesanDB.save()
        res.send("inserted data")
    } catch (err) {
        console.log(err)
    }
})

app.get('/read', async (req,res) => {
    pesanModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        } res.send(result)
    })
})
