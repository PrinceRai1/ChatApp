import Conversation from "../models/conversation.model";

export const sendMessage = async(req,res) =>{
    try{
        const{message} = req.body;
        const {id:receiverId} = req.param.id;
        const senderId = rea.user._id;

        let conversation = await Conversation.findOne({
            participants :{
                $all : [senderId,receiverId]
            },
        })
        if(!conversation){
            conversation = await Conversation.create({
                participants : [senderId,receiverId],
            })
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        // SOCKET IO FUNCTIONALLITY

        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json({newMessage})

    }catch(err){
        console.log(err.message)
        res.status(500).json({err:"Internal Server Error"
        })
    }
}

export const getMessage = async(req,res) =>{
    try{

        const {id:userToChatId}= req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants:{$all : [senderId,userToChatId]},
        }).populate("messages");

        res.status(200).json(conversation.messages)

    }
    catch(err){
        console.log(err.message)
        res.status(500).json({err:"Internal Server Error"
        })
    }
    
}