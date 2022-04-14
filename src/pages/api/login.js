import jwt from 'jsonwebtoken';
import dbconnect from "../../db/connect";
import User from "../../db/models/User";
import bcrypt from "bcryptjs";

dbconnect();
export default async function (req, res) {

    const {email} = req.body;

    let FindUser = await User.findOne({email: email});
    let password = await bcrypt.compare(req.body.password, FindUser.password);
    if (password){
        return res.status(200).json({
            user: FindUser
        });
    } else {
        return res.status(401).json({
            message: 'Invalid email or password'
        })
    }

}
