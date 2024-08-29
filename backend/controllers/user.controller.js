import User from "../models/user.model";

export const getUserForSidebar = async(req,res) =>{
    try{

        const loggedInUserId = req.user._id;

        const filterdUser = await User.find({_id:{$ne:loggedInUserId}}).select("-password")

        res.status(200).json(filterdUser);

    }catch(err){
        console.log("Error in getSidebar :",err.message);
        res.status(500).send({message:err.message});
    }
}