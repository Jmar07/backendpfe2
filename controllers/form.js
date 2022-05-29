const cli = require("nodemon/lib/cli")
const db = require("../db")

exports.insert = (req,res)=>{

const form = {
                dateInput:req.body.dateInput,
                clientID:req.body.clientID,
                clientsInput:req.body.clientsInput, 
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
                minutes:req.body.minutes,
                chauffeurInput : req.body.chauffeurInput,
                startTimeInput2 : req.body.startTimeInput2,
                endTimeInput2 :req.body.endTimeInput2,
            } // TODO

    
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

console.log(req.params);

    db.query({sql:"select * from formulaire where clientID = ?" , values:[id]

    } , (err,results,fields)=>{
            console.log(results);
            res.statusCode = 200;
            res.send(results)
        }
    )

}

exports.getListOfForms= (req,res)=>{

    db.query({sql:"select clientsInput , moduleInput , hours , minutes , dateInput from formulaire"

} , (err,results,fields)=>{
        console.log(results);
        res.statusCode = 200;
        res.send(results)
    }
)    

}


exports.getListOfDate= (req,res)=>{

    db.query({sql:"select dateInput from formulaire"

} , (err,results,fields)=>{
        console.log(results);
        res.statusCode = 200;
        res.send(results)
    }
)    

}