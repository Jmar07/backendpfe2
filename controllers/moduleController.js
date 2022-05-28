const db = require("../db")

exports.module = (req,res)=>{

    db.query({sql:"select DISTINCT IdModule ,designation from `Module`"

    } , (err,results,fields)=>{

            res.statusCode = 200;
            res.send(results)
        }
    )

}


exports.formModule = (req,res)=>{


const data = {idForm : req.body.idForm , module : req.body.moduleId}
console.log(data);

    db.query({sql:"insert into moduleform set ?"

    }, data , (err,results,fields)=>{

            res.statusCode = 200;
            res.send(results)
        }
    )


}

exports.getModuleByIdForm = (req,res)=>{

    const id = req.params.id

    console.log("id form "+id);

    db.query({sql:"select module from moduleform where idForm = ?" , values:[id]

    } , (err,results,fields)=>{

            res.statusCode = 200;
            res.send(results)
        }
    )


}

exports.getModule = (req,res)=>{

    const id = req.params.id

    console.log("id module "+id);

    db.query({sql:"select designation from module where idModule = ?" , values:[id]

    } , (err,results,fields)=>{

            res.statusCode = 200;
            res.send(results)
        }
    )


}