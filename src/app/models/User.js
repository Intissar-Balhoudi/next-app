const { Schema, models, model } = require("mongoose");
const common = {
    type: String,
    required: true,
    trim: true
}

const userSchema = new Schema({
    user_name: common,
    user_email: {
        ...common,
        unique: [true, "email id already exist"]
    },
    user_mobile: {
        ...common,
        unique: [true, "mobile number already exist"]
    }
},
{
    timestamps:true
})

const User = models.User || model('User',userSchema)

export default User