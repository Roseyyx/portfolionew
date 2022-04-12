import jwt from 'jsonwebtoken';
import dbconnect from "../../db/connect";
import User from "../../db/models/User";
const KEY = 'afghbdhjgfujhdijgdfk';

dbconnect();
export default async function (req, res) {
    const {email, password} = req.body;

    let CheckUser = await User.findOne({email: email, password: password});

    try {
        if (CheckUser){
            res.status(200).json("Logged In!");
        } else {
            res.status(401).json("Invalid Credentials");
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Server error'
        })
    }

}
