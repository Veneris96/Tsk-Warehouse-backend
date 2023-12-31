import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,
        strict: false
    }
)

const usersModel = mongoose.model("usersModel", usersSchema, "users")
export default usersModel