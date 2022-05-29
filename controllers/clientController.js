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



exports.activeUsers = (req,res)=>{

   

    db.query({sql:"select count(*) from `accesscontrol` where Actif=1"

    } , (err,results,fields)=>{

            res.statusCode = 200;
            res.send(results)
        }
    )
    

}


exports.inactiveUsers = (req,res)=>{

   

    db.query({sql:"select count(*) from `accesscontrol` where Actif=0"

    } , (err,results,fields)=>{

            res.statusCode = 200;
            res.send(results)
        }
    )
    

}