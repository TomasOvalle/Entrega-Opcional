import { Schema, Types, model } from "mongoose";

const collection = "users";
const schema = new Schema ( {
    user_id: { type: Types.ObjectId, ref: "users", required: true, index: true},
    email: { type: String, required: true, unique: true, index: true},
    password: { type: String, required: true },
    role: { type: Number, default: 0,},
    age: { type: Number, default: 12},
    photo: {
        type: String,
        default: "https://i.postimg.cc/wTgNFWhR/profile.png",
    },
},
{
    timestamps: true,
}
);

schema.pre("find", function () { this.populate("user_id", "email, photo -_id" )});
schema.pre("findOne", function () { this.populate("user_id", "email")});

const User = model(collection, schema);
export default User;