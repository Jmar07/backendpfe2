const db = require("../db")

exports.personnel = (req,res)=>{

    const id = req.params.id;

    console.log(req.params);

    db.query({sql:"select * from accesscontrol where Societe = ? and actif ='1';",values:[id]

    } , (err,results,fields)=>{

            res.statusCode = 200;
            res.send(results)
        }
    )
}