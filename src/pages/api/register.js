import dbconnect from "../../db/connect";
import User from "../../db/models/User"

dbconnect();
export default async function(req, res) {
    const {username, email, password} = req.body;

    let CheckUser = await User.findOne({email: email, username: username});

    if (CheckUser){
        res.status(400).json({
            message: "User already exists"
        })
        return;
    }

    let NewUser = new User({
        username: username,
        email: email,
        password: password
    });
    try {
        const savedUser = await NewUser.save();
        res.status(200).json(savedUser);
        return;
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error"
        })
        return;
    }

}