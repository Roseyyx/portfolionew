import dbconnect from "../../db/connect";
import User from "../../db/models/User"
import bcrypt from "bcryptjs";

dbconnect();
export default async function(req, res) {
    const {username, email} = req.body;

    let CheckUser = await User.findOne({email: email, username: username});

    if (CheckUser){
        return res.status(400).json({
            message: "User already exists"
        })
    }

    const password = await bcrypt.hash(req.body.password, 10);

    let NewUser = new User({
        username: username,
        email: email,
        password: password
    });
    try {
        const savedUser = await NewUser.save();
        return res.status(201).json({
            message: "Created new user"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }

}