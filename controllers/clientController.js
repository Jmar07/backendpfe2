const session = require("express-session");
const db = require("../db")

exports.client = (req,res)=>{

   

    db.query({sql:"select DISTINCT * from `client_test`"

    } , (err,results,fields)=>{

            res.statusCode = 200;
            res.send(results)
        }
    )
    

}