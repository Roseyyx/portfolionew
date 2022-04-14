import jwt from 'jsonwebtoken';
import dbconnect from "../../db/connect";
import User from "../../db/models/User";

dbconnect();
export default async function (req, res) {

    const {username,newname} = req.body;
    try{
        const FindUser = await User.findOneAndUpdate({username: username}, {"username": newname}).then((obj) => {
            return res.status(200).json({
                message: "Username changed successfully",
            })
        });
    } catch (e) {
        return res.status(500).json({
            message: "Internal Server error"
        })
    }
}
