
const user = require("../models/user")


exports.add_user = async(req,res)=> {
    //res.send(req.body)
    const userDetails = await user.build({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        gender : req.body.gender,
        email : req.body.email,
        DoB : req.body.DoB
    });

    await userDetails.save()
    if(!userDetails){
        return res.status(200).send({
            status : 404,
            message : 'No data found'
        });
    }
    
}