import dbconnect from "../../db/connect";
import User from "../../db/models/User"

dbconnect();
export default async function(req, res) {

    let CheckUser = await User.findOne({username: req.body.username});
    if (CheckUser){
        return res.json({
            user: CheckUser
        })
    } else{
        return res.status(400).json({
            message: "User not found"
        })
    }

}