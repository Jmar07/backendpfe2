const session = require("express-session");
const db = require("../db")


exports.login = (req,res)=>{

res.set('Access-Control-Allow-Origin', 'http://localhost:4200');

    const username = req.body.username;
    const password = req.body.password;

    db.query({sql:"select Login , Mdp from `Accesscontrol` where `Login` = ?",
    values:[username]

    } , (err,results,fields)=>{

        if(!results.length > 0){
            res.statusCode = 404;
            res.send("Nom d'utilisateur incorrect!")

        }else{

            db.query({sql:"select Login , Mdp from `Accesscontrol` where `Login` = ? and `Mdp` = ?",
            values:[username,password]

            }, (err,results,fields)=>{
                if(!results.length > 0){
                    res.statusCode = 403;
                    res.send("Mot de passe incorrect!")
                }else{
                    
                    req.session.username = username;

                    res.statusCode = 202
                    res.send("jawek behi")
                }
            })

            
        }

   
    })


}


exports.logout = (req,res)=>{

    req.session.destroy();
    res.send("user is loging out")

}