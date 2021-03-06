const mongoose = require('mongoose');


const TransactionSchema = new mongoose.Schema({
        text : {
            type : String ,
            required : [true , 'Please Add some Text'],
            trim : true
        },
      amount : {
          type : Number ,
          required : [true , ' Please Add + or - Numbers ']
      },
      createdAt : {
          type : Date ,
          default : Date.now
      }  
})

module.exports = mongoose.model('transactions' , TransactionSchema)