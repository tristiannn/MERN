const mongoose = require ('mongoose')

const pesanSchema = new mongoose.Schema({
    namaPengirim:{
        type: String,
        required: true,
        
    },
    pesanPengirim:{
        type: String,
    },
  
})

const pesanDB = mongoose.model("dataPesan", pesanSchema)
module.exports = pesanDB