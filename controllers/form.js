const db = require("../db")

exports.insert = (req,res)=>{

const form = {clientsInput:req.body.clientsInput, 
                moduleInput:req.body.moduleValue, 
                personnelInput:req.body.personnelInput, 
                AccompanyingInput:req.body.AccompanyingInput, 
                startDateInput:req.body.startDateInput, 
                endDateInput:req.body.endDateInput, 
                startTimeInput:req.body.startTimeInput, 
                endTimeInput:req.body.endTimeInput, 
                numberSheetInput:req.body.numberSheetInput, 
                signatureInput:req.body.signatureInput, 
                fileInput:req.body.fileInput, 
                rapportInput:req.body.rapportInput, 
                hours:req.body.hours, 
                minutes:req.body.minutes} // TODO

    
    db.query({sql:"INSERT INTO formulaire set ? "}, form , (error, results , fields)=>{


        if(error){
            throw new Error(error.message)
        }else{


            res.statusCode = 200
            res.send(results);

        }

    })



}


exports.getForm = (req,res)=>{

    const id = req.params.id

    db.query({sql:"select * from formulaire where id = ?" , values:[id]

    } , (err,results,fields)=>{

            res.statusCode = 200;
            res.send(results)
        }
    )


}